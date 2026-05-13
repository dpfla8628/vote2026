'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { AnswerOption, Question } from '@/types'
import { questions } from '@/data/questions'
import { calculateResult } from '@/lib/scoring'

type QuizState = 'quiz' | 'calculating'

export function useQuiz() {
  const router = useRouter()
  const [state, setState] = useState<QuizState>('quiz')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, AnswerOption>>(new Map())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const pendingTimeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  const currentQuestion: Question = questions[currentIndex]
  const progress = (currentIndex / questions.length) * 100
  const isLast = currentIndex === questions.length - 1

  const clearPendingTimeouts = useCallback(() => {
    pendingTimeouts.current.forEach((timeout) => clearTimeout(timeout))
    pendingTimeouts.current = []
  }, [])

  useEffect(() => {
    window.history.replaceState({ quizIndex: 0 }, '', window.location.href)

    const handlePopState = (event: PopStateEvent) => {
      const quizIndex = event.state?.quizIndex
      if (typeof quizIndex !== 'number' || quizIndex < 0 || quizIndex >= questions.length) {
        return
      }

      clearPendingTimeouts()
      setState('quiz')
      setSelectedId(null)
      setCurrentIndex(quizIndex)
      setAnswers((prev) => {
        const next = new Map<string, AnswerOption>()
        questions.slice(0, quizIndex).forEach((question) => {
          const answer = prev.get(question.id)
          if (answer) next.set(question.id, answer)
        })
        return next
      })
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      clearPendingTimeouts()
      window.removeEventListener('popstate', handlePopState)
    }
  }, [clearPendingTimeouts])

  const handleAnswer = useCallback(
    (option: AnswerOption) => {
      if (selectedId) return
      setSelectedId(option.id)

      const selectTimeout = setTimeout(() => {
        const newAnswers = new Map(answers)
        newAnswers.set(currentQuestion.id, option)
        setAnswers(newAnswers)

        if (isLast) {
          setState('calculating')
          const resultTimeout = setTimeout(() => {
            const result = calculateResult(newAnswers)
            sessionStorage.setItem('quizResult', JSON.stringify(result))
            const top = result.ranked[0]
            router.push(`/result?p=${top.partyId}&pct=${top.percentage}`)
          }, 800)
          pendingTimeouts.current.push(resultTimeout)
        } else {
          const nextIndex = currentIndex + 1
          window.history.pushState({ quizIndex: nextIndex }, '', window.location.href)
          setSelectedId(null)
          setCurrentIndex(nextIndex)
        }
      }, 350)
      pendingTimeouts.current.push(selectTimeout)
    },
    [selectedId, answers, currentQuestion, isLast, currentIndex, router]
  )

  const restart = useCallback(() => {
    clearPendingTimeouts()
    window.history.replaceState({ quizIndex: 0 }, '', window.location.href)
    setCurrentIndex(0)
    setAnswers(new Map())
    setSelectedId(null)
    setState('quiz')
  }, [clearPendingTimeouts])

  return {
    state,
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    progress,
    selectedId,
    handleAnswer,
    restart,
    answers,
  }
}

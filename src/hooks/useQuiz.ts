'use client'

import { useState, useCallback } from 'react'
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

  const currentQuestion: Question = questions[currentIndex]
  const progress = (currentIndex / questions.length) * 100
  const isLast = currentIndex === questions.length - 1

  const handleAnswer = useCallback(
    (option: AnswerOption) => {
      if (selectedId) return
      setSelectedId(option.id)

      setTimeout(() => {
        const newAnswers = new Map(answers)
        newAnswers.set(currentQuestion.id, option)
        setAnswers(newAnswers)

        if (isLast) {
          setState('calculating')
          setTimeout(() => {
            const result = calculateResult(newAnswers)
            sessionStorage.setItem('quizResult', JSON.stringify(result))
            const top = result.ranked[0]
            router.push(`/result?p=${top.partyId}&pct=${top.percentage}`)
          }, 800)
        } else {
          setSelectedId(null)
          setCurrentIndex((i) => i + 1)
        }
      }, 350)
    },
    [selectedId, answers, currentQuestion, isLast, router]
  )

  const restart = useCallback(() => {
    setCurrentIndex(0)
    setAnswers(new Map())
    setSelectedId(null)
    setState('quiz')
  }, [])

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

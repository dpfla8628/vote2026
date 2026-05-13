'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useQuiz } from '@/hooks/useQuiz'
import { ProgressBar } from '@/components/layout/ProgressBar'
import { QuizCard } from '@/components/quiz/QuizCard'

export default function QuizPage() {
  const { state, currentQuestion, currentIndex, totalQuestions, progress, selectedId, handleAnswer, goBack } =
    useQuiz()

  return (
    <div className="min-h-screen flex flex-col relative">
      <ProgressBar
        progress={progress}
        currentIndex={currentIndex}
        total={totalQuestions}
      />

      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <AnimatePresence mode="wait">
          {state === 'calculating' ? (
            <motion.div
              key="calculating"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="text-5xl mb-4 inline-block"
              >
                ⚖️
              </motion.div>
              <p className="text-white/80 text-lg font-medium">결과를 분석하는 중...</p>
              <p className="text-white/40 text-sm mt-2">공약을 꼼꼼히 비교하고 있어요</p>
            </motion.div>
          ) : (
            <motion.div key="quiz" className="w-full max-w-lg">
              <button
                type="button"
                onClick={goBack}
                disabled={currentIndex === 0}
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-white/55
                  transition-colors hover:text-white disabled:opacity-0 disabled:pointer-events-none"
                aria-label="이전 질문으로 돌아가기"
              >
                <span aria-hidden="true">←</span>
                이전 질문
              </button>

              <QuizCard
                question={currentQuestion}
                selectedId={selectedId}
                onAnswer={handleAnswer}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

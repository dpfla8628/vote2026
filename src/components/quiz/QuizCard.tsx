'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Question, CATEGORY_LABELS, CATEGORY_COLORS } from '@/types'
import { AnswerOption as AnswerOptionType } from '@/types'
import { AnswerOption } from './AnswerOption'

interface QuizCardProps {
  question: Question
  selectedId: string | null
  onAnswer: (option: AnswerOptionType) => void
}

export function QuizCard({ question, selectedId, onAnswer }: QuizCardProps) {
  const catColor = CATEGORY_COLORS[question.category]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-full max-w-lg mx-auto"
      >
        <div className="mb-6">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ backgroundColor: `${catColor}30`, color: catColor }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: catColor }}
            />
            {CATEGORY_LABELS[question.category]}
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2">
            {question.text}
          </h2>

          {question.description && (
            <p className="text-white/50 text-sm leading-relaxed">
              {question.description}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <AnswerOption
              key={option.id}
              option={option}
              index={i}
              isSelected={selectedId === option.id}
              isAnySelected={!!selectedId}
              onSelect={onAnswer}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

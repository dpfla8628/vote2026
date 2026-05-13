'use client'

import { motion } from 'framer-motion'
import { AnswerOption as AnswerOptionType } from '@/types'
import { clsx } from 'clsx'

interface AnswerOptionProps {
  option: AnswerOptionType
  index: number
  isSelected: boolean
  isAnySelected: boolean
  onSelect: (option: AnswerOptionType) => void
}

const LABELS = ['A', 'B', 'C', 'D']

export function AnswerOption({
  option,
  index,
  isSelected,
  isAnySelected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.3 }}
      whileHover={!isAnySelected ? { scale: 1.01, x: 4 } : {}}
      whileTap={!isAnySelected ? { scale: 0.99 } : {}}
      onClick={() => !isAnySelected && onSelect(option)}
      className={clsx(
        'w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 group',
        isSelected
          ? 'bg-violet-500/30 border-violet-400 shadow-lg shadow-violet-500/20'
          : isAnySelected
          ? 'bg-white/5 border-white/10 opacity-40'
          : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 cursor-pointer'
      )}
    >
      <span
        className={clsx(
          'flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all mt-0.5',
          isSelected
            ? 'bg-violet-400 text-white'
            : 'bg-white/20 text-white/60 group-hover:bg-white/30 group-hover:text-white'
        )}
      >
        {LABELS[index]}
      </span>
      <div className="flex flex-col gap-1 pt-0.5">
        <span
          className={clsx(
            'text-sm sm:text-base font-bold leading-snug transition-colors',
            isSelected ? 'text-white' : 'text-white/90'
          )}
        >
          {option.text}
        </span>
        <span
          className={clsx(
            'text-xs sm:text-sm leading-relaxed transition-colors',
            isSelected ? 'text-white/80' : 'text-white/50'
          )}
        >
          {option.subtitle}
        </span>
      </div>
    </motion.button>
  )
}

'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  currentIndex: number
  total: number
}

export function ProgressBar({ progress, currentIndex, total }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-400 to-pink-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between items-center px-4 py-2 text-white/60 text-xs">
        <span>2026 지방선거 정책 매칭</span>
        <span>
          {currentIndex + 1} / {total}
        </span>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Party } from '@/types'

interface PartyMatchCardProps {
  party: Party
  percentage: number
}

export function PartyMatchCard({ party, percentage }: PartyMatchCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      className="relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
      style={{ background: `linear-gradient(135deg, ${party.color}ee, ${party.color}99)` }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, white 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <p className="text-white/70 text-sm font-medium mb-1">나와 가장 잘 맞는 정당</p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{party.emoji}</span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{party.name}</h2>
            <p className="text-white/80 text-sm mt-0.5">{party.tagline}</p>
          </div>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-5xl sm:text-6xl font-black">{percentage}%</span>
          <span className="text-white/70 text-lg mb-2">일치</span>
        </div>
      </div>
    </motion.div>
  )
}

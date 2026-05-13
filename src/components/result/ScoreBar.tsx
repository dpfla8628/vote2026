'use client'

import { motion } from 'framer-motion'
import { RankedParty } from '@/types'
import { parties } from '@/data/parties'

interface ScoreBarProps {
  ranked: RankedParty[]
}

export function ScoreBar({ ranked }: ScoreBarProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider">
        전체 정당 매칭률
      </h3>
      {ranked.map((item, i) => {
        const party = parties[item.partyId]
        return (
          <motion.div
            key={item.partyId}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.07 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg w-8 flex-shrink-0">{party.emoji}</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white/80 text-sm font-medium">{party.shortName}</span>
                <span className="text-white/60 text-sm">{item.percentage}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: party.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.7, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Party, CATEGORY_LABELS, CATEGORY_COLORS } from '@/types'

interface PolicyExplainerProps {
  party: Party
}

export function PolicyExplainer({ party }: PolicyExplainerProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider">
        {party.shortName} 주요 공약
      </h3>
      {party.platforms.map((platform, i) => {
        const color = CATEGORY_COLORS[platform.category]
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: color }}
              />
              <div>
                <span
                  className="text-xs font-semibold"
                  style={{ color }}
                >
                  {CATEGORY_LABELS[platform.category]}
                </span>
                <h4 className="text-white font-bold mt-0.5 mb-1">{platform.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{platform.description}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

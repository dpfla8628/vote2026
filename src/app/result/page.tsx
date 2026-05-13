'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { QuizResult } from '@/types'
import { parties } from '@/data/parties'
import { PartyMatchCard } from '@/components/result/PartyMatchCard'
import { ScoreBar } from '@/components/result/ScoreBar'
import { PolicyExplainer } from '@/components/result/PolicyExplainer'
import { ShareButton } from '@/components/result/ShareButton'

export default function ResultPage() {
  const router = useRouter()
  const [result, setResult] = useState<QuizResult | null>(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('quizResult')
    if (!raw) {
      router.replace('/')
      return
    }
    setResult(JSON.parse(raw))
  }, [router])

  if (!result) return null

  const topParty = parties[result.topPartyId]
  const topRanked = result.ranked.find((r) => r.partyId === result.topPartyId)!

  return (
    <div className="min-h-screen px-4 py-12 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center mb-2">
          <p className="text-white/50 text-sm">2026 지방선거 정책 매칭 결과</p>
        </div>

        {/* Matched party hero */}
        <PartyMatchCard party={topParty} percentage={topRanked.percentage} />

        {/* Score bars */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <ScoreBar ranked={result.ranked} />
        </div>

        {/* Policy explainer */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <PolicyExplainer party={topParty} />
        </div>

        {/* Share + restart */}
        <ShareButton party={topParty} percentage={topRanked.percentage} />

        <button
          onClick={() => {
            sessionStorage.removeItem('quizResult')
            router.push('/quiz')
          }}
          className="w-full py-4 rounded-2xl font-semibold text-white/60 border border-white/10
            hover:bg-white/5 transition-colors duration-200"
        >
          다시 테스트하기
        </button>

        <p className="text-center text-white/25 text-xs leading-relaxed pb-4">
          본 결과는 2026년 6·3 지방선거 정당 공약 기반이며, 특정 정당을 지지하거나 반대하지 않습니다.
        </p>
      </motion.div>
    </div>
  )
}

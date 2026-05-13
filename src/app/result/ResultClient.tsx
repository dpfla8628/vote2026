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

const ASSEMBLY_MEMBERS_URL = 'https://www.lawmake.kr/my-district'
const POLLING_PLACE_URL = 'https://vote2026.kr/voting/'

interface ResultClientProps {
  partyId: string
  pct: number
}

export function ResultClient({ partyId, pct }: ResultClientProps) {
  const router = useRouter()
  const [result, setResult] = useState<QuizResult | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem('quizResult')
    if (raw) {
      setResult(JSON.parse(raw))
    }
    setReady(true)
  }, [])

  const topParty = parties[partyId] ?? parties['minjoo']

  // URL 파라미터가 유효하지 않으면 홈으로
  if (ready && !parties[partyId]) {
    router.replace('/')
    return null
  }

  // sessionStorage에 전체 결과가 있으면 그걸 우선 사용, 없으면 URL 파라미터로 렌더링
  const displayPercentage = result
    ? (result.ranked.find((r) => r.partyId === partyId)?.percentage ?? pct)
    : pct

  return (
    <div className="min-h-screen px-4 py-12 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-2">
          <p className="text-white/50 text-sm">2026 지방선거 정책 매칭 결과</p>
        </div>

        <PartyMatchCard party={topParty} percentage={displayPercentage} />

        {/* 전체 점수 바는 sessionStorage 결과가 있을 때만 표시 */}
        {result && (
          <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
            <ScoreBar ranked={result.ranked} />
          </div>
        )}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
          <PolicyExplainer party={topParty} />
        </div>

        <ShareButton party={topParty} percentage={displayPercentage} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={ASSEMBLY_MEMBERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white
              hover:bg-white/10 transition-colors duration-200 flex items-center justify-between gap-3"
          >
            <span>
              <span className="block text-sm font-bold">내 지역 국회의원</span>
              <span className="block text-xs text-white/45 mt-0.5">지역구로 찾아보기</span>
            </span>
            <span className="text-white/40" aria-hidden="true">↗</span>
          </a>

          <a
            href={POLLING_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white
              hover:bg-white/10 transition-colors duration-200 flex items-center justify-between gap-3"
          >
            <span>
              <span className="block text-sm font-bold">투표소 찾기</span>
              <span className="block text-xs text-white/45 mt-0.5">2026 안내에서 검색</span>
            </span>
            <span className="text-white/40" aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          onClick={() => {
            sessionStorage.removeItem('quizResult')
            router.push('/quiz')
          }}
          className="w-full py-4 rounded-2xl font-semibold text-white/60 border border-white/10
            hover:bg-white/5 transition-colors duration-200"
        >
          {result ? '다시 테스트하기' : '나도 테스트해보기 →'}
        </button>

        <p className="text-center text-white/25 text-xs leading-relaxed pb-4">
          본 결과는 2026년 6·3 지방선거 정당 공약 기반이며, 특정 정당을 지지하거나 반대하지 않습니다.
        </p>
      </motion.div>
    </div>
  )
}

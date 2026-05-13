'use client'

import { useState } from 'react'
import { Party } from '@/types'

interface ShareButtonProps {
  party: Party
  percentage: number
}

export function ShareButton({ party, percentage }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const shareTitle = `나는 ${party.name}과 ${percentage}% 일치했어요!`
  const shareText = `${shareTitle}\n2026 지방선거 정책 매칭 테스트`
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/result?p=${encodeURIComponent(party.id)}&pct=${encodeURIComponent(percentage)}`
      : ''

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: '2026 지방선거 정책 매칭 테스트',
          url,
        })
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-full py-4 rounded-2xl font-bold text-white transition-all duration-200
        bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-400 hover:to-pink-400
        active:scale-95 shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2"
    >
      {copied ? (
        <>✅ 링크가 복사됐어요!</>
      ) : (
        <>
          <span>📤</span>
          카카오톡으로 결과 공유하기
        </>
      )}
    </button>
  )
}

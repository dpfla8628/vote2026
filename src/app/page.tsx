'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { VisitorCounter } from '@/components/layout/VisitorCounter'

const PARTY_COLORS = [
  '#1E6FCC',
  '#C0392B',
  '#00875A',
  '#E67E22',
  '#A93226',
  '#7D3C98',
  '#B7950B',
]

const PARTIES = [
  { name: '더불어민주당', emoji: '🔵', color: '#1E6FCC', tagline: '균형 잡힌 성장, 모두를 위한 나라' },
  { name: '국민의힘', emoji: '🔴', color: '#C0392B', tagline: '안정과 성장, 자유로운 대한민국' },
  { name: '조국혁신당', emoji: '🟢', color: '#00875A', tagline: '개혁을 완성하는 혁신의 힘' },
  { name: '개혁신당', emoji: '🟠', color: '#E67E22', tagline: '기득권을 깨는 실용적 개혁' },
  { name: '진보당', emoji: '✊', color: '#A93226', tagline: '노동자·서민이 주인인 나라' },
  { name: '기본소득당', emoji: '💜', color: '#7D3C98', tagline: '모두에게 기본, 모두가 주인' },
  { name: '정의당', emoji: '⚖️', color: '#B7950B', tagline: '정의로운 나라, 평등한 일상' },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const CARD_SPREAD = 0.62

export default function LandingPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(260)

  // 컨테이너 너비 기준으로 카드 너비 계산
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      const w = containerRef.current.offsetWidth
      setCardWidth(Math.round(Math.min(386, Math.max(250, w * 0.72))))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PARTIES.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  const handleStart = async () => {
    try {
      await fetch('/api/visitors', { method: 'POST' })
    } catch {
      // ignore
    }
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTY_COLORS.map((color, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              backgroundColor: color,
              width: `${200 + i * 40}px`,
              height: `${200 + i * 40}px`,
              left: `${(i * 15) % 80}%`,
              top: `${(i * 23) % 80}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <VisitorCounter />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm mb-6">
            <span>🗳️</span>
            <span>2026년 6월 3일 지방선거</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            색깔 말고 공약으로,
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              2026 어떤 정당 투표할까?
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-3">
            10문항으로 나와 맞는 정당을 찾아드려요.
          </p>

          <p className="text-white/40 text-sm mb-8">
            각 문항의 보기는 2026 지방선거 공약 기반이에요
          </p>
        </motion.div>

        {/* Party carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-white/35 text-xs tracking-widest mb-4">혹시 나는 이 당과 맞을까?</p>

          <div
            ref={containerRef}
            className="relative mx-auto w-full overflow-visible"
            style={{ height: '9rem' }}
          >
            {PARTIES.map((p, i) => {
              const rawOffset = i - currentIndex
              const offset =
                rawOffset > PARTIES.length / 2
                  ? rawOffset - PARTIES.length
                  : rawOffset < -PARTIES.length / 2
                    ? rawOffset + PARTIES.length
                    : rawOffset
              const isCenter = offset === 0
              const isVisible = Math.abs(offset) <= 1
              const x = -cardWidth / 2 + offset * cardWidth * CARD_SPREAD

              return (
                <motion.div
                  key={p.name}
                  className="absolute left-1/2 top-2 h-32"
                  style={{
                    width: cardWidth,
                    pointerEvents: isVisible ? 'auto' : 'none',
                    zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                  }}
                  animate={{
                    x,
                    scale: isCenter ? 1 : 0.74,
                    opacity: isVisible ? (isCenter ? 1 : 0.28) : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(0.2px)',
                  }}
                  transition={{ duration: 0.42, ease: EASE }}
                >
                  <div
                    className="relative w-full h-full flex items-center gap-4 px-5 rounded-2xl border"
                    style={{
                      borderColor: `${p.color}${isCenter ? '55' : '18'}`,
                      background: `linear-gradient(135deg, ${p.color}${isCenter ? '28' : '0d'} 0%, ${p.color}05 100%)`,
                      boxShadow: isCenter
                        ? `0 0 50px ${p.color}28, inset 0 1px 0 ${p.color}20`
                        : 'none',
                    }}
                  >
                    <motion.span
                      className="text-5xl shrink-0 select-none"
                      animate={{ scale: isCenter ? 1 : 0.82 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 16 }}
                    >
                      {p.emoji}
                    </motion.span>

                    <div className="text-left min-w-0 overflow-hidden">
                      <p className="text-white font-extrabold text-lg leading-tight truncate">
                        {p.name}
                      </p>
                      <motion.p
                        className="text-white/45 text-xs mt-0.5 leading-snug line-clamp-2"
                        animate={{ opacity: isCenter ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {p.tagline}
                      </motion.p>
                    </div>

                    {isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        animate={{ boxShadow: [`0 0 0 0 ${p.color}50`, `0 0 28px 4px ${p.color}00`] }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {PARTIES.map((p, i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full cursor-pointer"
                animate={{
                  width: i === currentIndex ? 22 : 6,
                  backgroundColor: i === currentIndex ? p.color : 'rgba(255,255,255,0.18)',
                  opacity: i === currentIndex ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleStart}
            className="w-full max-w-sm py-5 rounded-2xl text-lg font-bold text-white
              bg-gradient-to-r from-violet-500 to-pink-500
              shadow-xl shadow-violet-500/40
              hover:shadow-violet-500/60 transition-shadow duration-300"
          >
            테스트 시작하기 →
          </motion.button>

          <p className="text-white/30 text-xs mt-4">
            약 3분 소요 · 개인정보 수집 없음 · 정치적 중립
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-white/25 text-xs leading-relaxed"
        >
          본 테스트는 2026년 6·3 지방선거 각 정당의 10대 공약(중앙선거관리위원회 발표 기준)을
          바탕으로 제작된 비당파적 정보 서비스입니다.
        </motion.p>
      </div>
    </div>
  )
}

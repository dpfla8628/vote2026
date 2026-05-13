'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
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

export default function LandingPage() {
  const router = useRouter()

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

      <div className="relative z-10 text-center max-w-lg mx-auto">
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
            나는 어떤 당과
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              가장 잘 맞을까?
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-3">
            정당 색깔이 아닌 실제 공약으로 선택하세요.
            <br />
            10문항으로 나와 맞는 정당을 찾아드려요.
          </p>

          <p className="text-white/40 text-sm mb-10">
            각 문항의 보기는 2026 지방선거 공약 기반이에요
          </p>
        </motion.div>

        {/* Party emoji row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-3 mb-10 text-2xl"
        >
          {['🔵', '🔴', '🟢', '🟠', '✊', '💜', '⚖️'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {emoji}
            </motion.span>
          ))}
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

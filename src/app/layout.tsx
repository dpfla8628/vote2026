import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: '2026 지방선거 정책 매칭 테스트',
  description:
    '10문항으로 알아보는 나와 가장 잘 맞는 정당 — 2026년 6월 3일 지방선거 공약 기반',
  openGraph: {
    title: '2026 지방선거 정책 매칭 테스트',
    description: '10문항으로 알아보는 나와 가장 잘 맞는 정당',
    images: ['/og-image.png'],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 지방선거 정책 매칭 테스트',
    description: '10문항으로 알아보는 나와 가장 잘 맞는 정당',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

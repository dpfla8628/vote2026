import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { getSiteUrl } from '@/lib/site'
import './globals.css'

const baseUrl = getSiteUrl()
const defaultOgImage = `${baseUrl}/og/default.png?v=2`

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '2026 지방선거 정책 매칭 테스트',
    template: '%s | 2026 지방선거 정책 매칭',
  },
  description: '10문항으로 알아보는 나와 가장 잘 맞는 정당 — 2026년 6월 3일 지방선거 공약 기반',
  openGraph: {
    title: '2026 지방선거 정책 매칭 테스트',
    description: '정당 색깔이 아닌 공약으로 선택하세요. 10문항으로 나와 맞는 정당 찾기.',
    url: baseUrl,
    siteName: '2026 지방선거 정책 매칭 테스트',
    images: [
      {
        url: defaultOgImage,
        secureUrl: defaultOgImage,
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: '2026 지방선거 정책 매칭 테스트',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 지방선거 정책 매칭 테스트',
    description: '정당 색깔이 아닌 공약으로 선택하세요.',
    images: [defaultOgImage],
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

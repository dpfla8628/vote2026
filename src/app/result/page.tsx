import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site'
import { ResultClient } from './ResultClient'

const PARTY_NAMES: Record<string, string> = {
  minjoo: '더불어민주당',
  ppp: '국민의힘',
  chokuk: '조국혁신당',
  reform: '개혁신당',
  progressive: '진보당',
  basicincome: '기본소득당',
  justice: '정의당',
}

const PARTY_EMOJIS: Record<string, string> = {
  minjoo: '🔵',
  ppp: '🔴',
  chokuk: '🟢',
  reform: '🟠',
  progressive: '✊',
  basicincome: '💜',
  justice: '⚖️',
}

const PARTY_IMAGES: Record<string, string> = {
  minjoo: 'result-minjoo.png',
  ppp: 'result-ppp.png',
  chokuk: 'result-chokuk.png',
  reform: 'result-reform.png',
  progressive: 'result-progressive.png',
  basicincome: 'result-basicincome.png',
  justice: 'result-justice.png',
}

const OG_VERSION = '2'

interface Props {
  searchParams: { p?: string; pct?: string; v?: string }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const baseUrl = getSiteUrl()
  const partyId = searchParams.p ?? ''
  const pct = String(Number(searchParams.pct ?? 0) || 0)
  const partyName = PARTY_NAMES[partyId]
  const emoji = PARTY_EMOJIS[partyId] ?? '🗳️'

  if (!partyName) {
    return {
      title: '2026 지방선거 정책 매칭 테스트',
      description: '10문항으로 알아보는 나와 가장 잘 맞는 정당',
      alternates: { canonical: `${baseUrl}/` },
      openGraph: {
        title: '2026 지방선거 정책 매칭 테스트',
        description: '10문항으로 알아보는 나와 가장 잘 맞는 정당',
        url: `${baseUrl}/`,
        images: [
          {
            url: `${baseUrl}/og/default.png?v=${OG_VERSION}`,
            secureUrl: `${baseUrl}/og/default.png?v=${OG_VERSION}`,
            type: 'image/png',
            width: 1200,
            height: 630,
          },
        ],
        locale: 'ko_KR',
        type: 'website',
      },
    }
  }

  const title = `${emoji} ${partyName}과 ${pct}% 일치!`
  const description = `나는 ${partyName}과 ${pct}% 일치했어요! 2026 지방선거 정책 매칭 테스트 — 나는 어떤 정당과 맞을까?`
  const resultUrl = `${baseUrl}/result?p=${encodeURIComponent(partyId)}&pct=${encodeURIComponent(pct)}&v=${OG_VERSION}`
  const imageUrl = `${baseUrl}/og/${PARTY_IMAGES[partyId]}?v=${OG_VERSION}`

  return {
    title,
    description,
    alternates: { canonical: resultUrl },
    openGraph: {
      title,
      description,
      url: resultUrl,
      siteName: '2026 지방선거 정책 매칭 테스트',
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          type: 'image/png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default function ResultPage({ searchParams }: Props) {
  const partyId = searchParams.p ?? ''
  const pct = Number(searchParams.pct ?? 0)
  return <ResultClient partyId={partyId} pct={pct} />
}

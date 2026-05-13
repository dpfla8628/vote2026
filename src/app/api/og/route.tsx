import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const PARTIES: Record<string, { name: string; color: string; tagline: string }> = {
  minjoo:      { name: '더불어민주당', color: '#1E6FCC', tagline: '균형 잡힌 성장, 모두를 위한 나라' },
  ppp:         { name: '국민의힘',     color: '#C0392B', tagline: '안정과 성장, 자유로운 대한민국' },
  chokuk:      { name: '조국혁신당',   color: '#00875A', tagline: '개혁을 완성하는 혁신의 힘' },
  reform:      { name: '개혁신당',     color: '#E67E22', tagline: '기득권을 깨는 실용적 개혁' },
  progressive: { name: '진보당',       color: '#A93226', tagline: '노동자·서민이 주인인 나라' },
  basicincome: { name: '기본소득당',   color: '#7D3C98', tagline: '모두에게 기본, 모두가 주인' },
  justice:     { name: '정의당',       color: '#B7950B', tagline: '정의로운 나라, 평등한 일상' },
}

async function loadKoreanFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      new URL('../../fonts/Pretendard-Bold.subset.woff', import.meta.url)
    )
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const partyId = searchParams.get('p') ?? ''
  const pct = searchParams.get('pct') ?? ''
  const party = PARTIES[partyId]

  const fontData = await loadKoreanFont()
  const fonts = fontData
    ? [{ name: 'Pretendard', data: fontData, weight: 700 as const, style: 'normal' as const }]
    : []
  const fontFamily = fontData ? 'Pretendard, sans-serif' : 'sans-serif'

  // 결과 페이지용 OG (party + percentage)
  if (party && pct) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${party.color} 0%, #0f0c29 100%)`,
            fontFamily,
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* 배경 글로우 */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: `radial-gradient(circle at 20% 50%, ${party.color}44 0%, transparent 60%)`,
            }}
          />

          {/* 상단 레이블 */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 24,
              display: 'flex',
              letterSpacing: '0.05em',
            }}
          >
            2026 지방선거 정책 매칭 결과
          </div>

          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.92)',
              border: `12px solid ${party.color}`,
              marginBottom: 24,
              display: 'flex',
            }}
          >
            <div />
          </div>

          {/* 정당명 */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: 'white',
              marginBottom: 12,
              display: 'flex',
              textAlign: 'center',
            }}
          >
            {party.name}
          </div>

          {/* 퍼센트 */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: 'white',
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
            }}
          >
            <span>{pct}%</span>
            <span style={{ fontSize: 40, color: 'rgba(255,255,255,0.7)' }}>일치</span>
          </div>

          {/* 태그라인 */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.6)',
              marginTop: 24,
              display: 'flex',
              textAlign: 'center',
            }}
          >
            {party.tagline}
          </div>

          {/* 하단 앱 이름 */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 60,
              fontSize: 22,
              color: 'rgba(255,255,255,0.3)',
              display: 'flex',
            }}
          >
            vote2026.vercel.app
          </div>
        </div>
      ),
      { width: 1200, height: 630, fonts }
    )
  }

  // 랜딩 페이지용 OG (기본)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          fontFamily,
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* 배경 글로우 */}
        <div
          style={{
            position: 'absolute',
            top: '20%', left: '50%',
            width: 600, height: 400,
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            transform: 'translateX(-50%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
          {['#1E6FCC', '#C0392B', '#00875A', '#E67E22', '#A93226', '#7D3C98', '#B7950B'].map((color, i) => (
            <span
              key={i}
              style={{
                width: 38,
                height: 38,
                borderRadius: 999,
                background: color,
                border: '4px solid rgba(255,255,255,0.78)',
              }}
            />
          ))}
        </div>

        {/* 메인 타이틀 */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>2026 지방선거</span>
          <span style={{ color: '#a78bfa' }}>정책 매칭 테스트</span>
        </div>

        {/* 서브타이틀 */}
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          정당 색깔이 아닌 공약으로 선택하세요
        </div>

        {/* 10문항 뱃지 */}
        <div
          style={{
            marginTop: 40,
            padding: '16px 40px',
            background: 'rgba(139,92,246,0.3)',
            border: '1px solid rgba(139,92,246,0.5)',
            borderRadius: 999,
            fontSize: 28,
            color: 'rgba(255,255,255,0.8)',
            display: 'flex',
          }}
        >
          10문항 · 7개 정당 비교 · 약 3분
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 60,
            fontSize: 22,
            color: 'rgba(255,255,255,0.2)',
            display: 'flex',
          }}
        >
          vote2026.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  )
}

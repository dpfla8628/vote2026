# 🗳️ 2026 지방선거 정책 매칭 테스트
https://vote2026-tan.vercel.app/

> 정당 색깔이 아닌, **실제 공약**으로 나와 맞는 정당을 찾아주는 서비스

2026년 6월 3일 전국동시지방선거를 앞두고, 유권자가 각 정당의 10대 공약을 쉽게 비교하고 본인의 가치관과 가장 잘 맞는 정당을 찾을 수 있도록 제작된 정책 매칭 퀴즈 앱입니다.

**공약 출처:** 중앙선거관리위원회 정책·공약마당 발표 기준 (2026년 5월)  
**특정 정당 지지 없음** — 7개 정당 공약을 동등하게 수록

---

## 📋 주요 기능

- **10문항 4지선다 퀴즈** — 지역발전·주거·산업·청년·환경·복지·사법·교통 8개 분야
- **실시간 정책 비교** — 같은 문제에 대한 각 정당의 다른 해법을 한눈에 비교
- **정당 매칭 결과** — 답변 가중치 합산으로 7개 정당 일치율 계산
- **공약 상세 설명** — 매칭된 정당의 2026 지방선거 실제 공약 해설
- **결과 공유** — Web Share API / 클립보드 복사 (카카오톡 공유 지원)
- **방문자 수 추적** — 실시간 참여자 카운터 (Vercel KV)
- **페이지 분석** — 방문자·페이지뷰 대시보드 (Vercel Analytics)

---

## 🛠️ 기술 스택

### Frontend

| 기술 | 용도 |
|------|------|
| [Next.js 14](https://nextjs.org) (App Router) | React 풀스택 프레임워크 |
| TypeScript | 타입 안전성 |
| [Tailwind CSS](https://tailwindcss.com) | 유틸리티 퍼스트 스타일링 |
| [Framer Motion](https://www.framer.com/motion/) | 페이지 전환·카드 슬라이드·점수 바 애니메이션 |
| [Pretendard](https://github.com/orioncactus/pretendard) | 한국어 최적화 웹폰트 |
| [SWR](https://swr.vercel.app) | 방문자 카운터 실시간 폴링 |

### Backend / Infra

| 기술 | 용도 |
|------|------|
| [Vercel](https://vercel.com) | 배포 (GitHub 자동 연동, Edge Network) |
| [Vercel KV](https://vercel.com/docs/storage/vercel-kv) (Upstash Redis) | 방문자 카운터 (`visitor_count` key) |
| [Vercel Analytics](https://vercel.com/docs/analytics) | 페이지뷰·방문자·유입 경로 분석 |
| Next.js API Routes | `/api/visitors` GET/POST 엔드포인트 |

### 퀴즈 로직

- **점수 집계:** 각 답변 옵션이 복수 정당에 1~3점 가중치 부여 → `ScoreMap` 합산
- **결과 계산:** 전체 합 대비 백분율 정규화 → 내림차순 정렬
- **상태 관리:** `useQuiz` 커스텀 훅 (LANDING → QUIZ → CALCULATING → RESULT)
- **결과 전달:** `sessionStorage` JSON 직렬화 (개인정보 서버 전송 없음)

---

## 🗂️ 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 메타데이터, Analytics, Pretendard 폰트
│   ├── page.tsx                # 랜딩 (배경 애니메이션, 방문자 카운터)
│   ├── quiz/page.tsx           # 퀴즈 진행 (문항 슬라이드)
│   ├── result/page.tsx         # 결과 (매칭 정당, 점수 바, 공약 해설)
│   └── api/visitors/route.ts   # 방문자 카운터 API (KV GET/POST)
├── components/
│   ├── quiz/
│   │   ├── QuizCard.tsx        # AnimatePresence 감싼 문항 카드
│   │   └── AnswerOption.tsx    # 캐치프레이즈 + 설명 2단 버튼
│   ├── result/
│   │   ├── PartyMatchCard.tsx  # 매칭 정당 히어로 카드
│   │   ├── ScoreBar.tsx        # 7개 정당 stagger 애니메이션 바
│   │   ├── PolicyExplainer.tsx # 공약 카드 목록
│   │   └── ShareButton.tsx     # Web Share API / 클립보드 폴백
│   └── layout/
│       ├── ProgressBar.tsx     # 상단 진행률 바
│       └── VisitorCounter.tsx  # 실시간 참여자 뱃지
├── data/
│   ├── questions.ts            # 10문항 · 공약 출처 주석 포함
│   └── parties.ts              # 7개 정당 메타데이터 + 공약 설명
├── lib/
│   ├── scoring.ts              # 점수 집계·정규화·정렬 알고리즘
│   └── kv.ts                   # Vercel KV 클라이언트 래퍼
├── hooks/
│   └── useQuiz.ts              # 퀴즈 상태 머신
└── types/
    └── index.ts                # 공통 TypeScript 인터페이스
```

---

## 🚀 로컬 개발

### 1. 설치

```bash
git clone https://github.com/dpfla8628/vote2026.git
cd vote2026
npm install
```

### 2. 환경변수 설정 (방문자 카운터 사용 시)

Vercel Dashboard → Project → Storage → KV → `.env.local` 복사

```env
KV_URL=...
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...
```

> KV 환경변수가 없어도 앱은 정상 작동합니다. 방문자 카운터만 0으로 표시됩니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000` 접속

---

## ☁️ Vercel 배포

### 자동 배포 (권장)

1. [vercel.com/new](https://vercel.com/new) → GitHub 레포 선택 → **Deploy**
2. Next.js 자동 감지, 별도 설정 불필요
3. `main` 브랜치 푸시 시 자동 재배포

### Vercel KV 설정 (방문자 카운터)

```
Vercel Dashboard → Project → Storage 탭 → Create Database → KV
```
생성 후 환경변수 자동 주입 → Redeploy 1회

### Vercel Analytics 설정

```
Vercel Dashboard → Project → Analytics 탭 → Enable
```

활성화 후 확인 가능한 지표:
- 일별·주별 고유 방문자 수
- 페이지뷰 및 체류 시간
- 국가·기기·브라우저별 분포
- 유입 경로 (카카오톡 공유 추적 포함)

---

## 🏛️ 수록 정당 (7개)

| 정당 | 주요 공약 (2026 지방선거) |
|------|--------------------------|
| 더불어민주당 | 5극·3특 균형발전, AI 3대 강국, RE100, 검찰개혁 |
| 국민의힘 | 반값 전세, SMR 원전, GTX 확장, 주니어 ISA |
| 조국혁신당 | 99년 공공임대(1호), 기후펀드·기후수당, AI 넥서스 |
| 개혁신당 | 규제완화·신산업 실험(1호), 선거제도 개혁 |
| 진보당 | 공공버스 공영화(1호), 지역공공은행, 통합돌봄 직영 |
| 기본소득당 | 지방형 기본소득, 주민배당형 에너지펀드 |
| 정의당 | 기본서비스 보장, 공공의료·공공주택, 노동권 강화 |

**공약 출처:** 중앙선거관리위원회 정책·공약마당 (policy.nec.go.kr), 각 정당 공식 발표 (2026년 5월 기준)

---

## ⚖️ 이용 안내

- 본 서비스는 **비당파적 정보 제공** 목적으로 제작되었습니다
- 특정 정당을 지지하거나 반대하지 않습니다
- 사용자 답변은 `sessionStorage`에만 저장되며 서버로 전송되지 않습니다
- 방문자 카운터는 총 카운트(정수)만 저장하며 개인정보를 수집하지 않습니다

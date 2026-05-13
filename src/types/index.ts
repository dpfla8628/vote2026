export type PartyId =
  | 'minjoo'
  | 'ppp'
  | 'chokuk'
  | 'reform'
  | 'progressive'
  | 'basicincome'
  | 'justice'

export type CategoryId =
  | 'regional'
  | 'housing'
  | 'industry'
  | 'youth'
  | 'environment'
  | 'welfare'
  | 'judicial'
  | 'transport'

export interface PartyScore {
  partyId: PartyId
  points: number
}

export interface AnswerOption {
  id: string
  text: string
  scores: PartyScore[]
}

export interface Question {
  id: string
  category: CategoryId
  text: string
  description?: string
  options: [AnswerOption, AnswerOption, AnswerOption, AnswerOption]
}

export type ScoreMap = Record<PartyId, number>

export interface RankedParty {
  partyId: PartyId
  score: number
  percentage: number
}

export interface QuizResult {
  scores: ScoreMap
  ranked: RankedParty[]
  topPartyId: PartyId
}

export interface PolicyPlatform {
  category: CategoryId
  title: string
  description: string
}

export interface Party {
  id: PartyId
  name: string
  shortName: string
  color: string
  gradient: string
  bgGradient: string
  emoji: string
  tagline: string
  platforms: PolicyPlatform[]
}

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  regional: '지역 균형발전',
  housing: '주거 정책',
  industry: '산업·일자리',
  youth: '청년 지원',
  environment: '환경·에너지',
  welfare: '복지·돌봄',
  judicial: '사법·제도 개혁',
  transport: '교통 인프라',
}

export const CATEGORY_COLORS: Record<CategoryId, string> = {
  regional: '#6366f1',
  housing: '#f59e0b',
  industry: '#10b981',
  youth: '#f97316',
  environment: '#22c55e',
  welfare: '#ec4899',
  judicial: '#8b5cf6',
  transport: '#06b6d4',
}

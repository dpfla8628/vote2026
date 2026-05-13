import { AnswerOption, PartyId, QuizResult, ScoreMap } from '@/types'

const ALL_PARTIES: PartyId[] = [
  'minjoo',
  'ppp',
  'chokuk',
  'reform',
  'progressive',
  'basicincome',
  'justice',
]

export function calculateResult(answers: Map<string, AnswerOption>): QuizResult {
  const scores: ScoreMap = Object.fromEntries(
    ALL_PARTIES.map((id) => [id, 0])
  ) as ScoreMap

  for (const option of Array.from(answers.values())) {
    for (const { partyId, points } of option.scores) {
      scores[partyId] += points
    }
  }

  const total = Object.values(scores).reduce((sum, s) => sum + s, 0) || 1

  const ranked = ALL_PARTIES.map((partyId) => ({
    partyId,
    score: scores[partyId],
    percentage: Math.round((scores[partyId] / total) * 100),
  })).sort((a, b) => b.score - a.score)

  return {
    scores,
    ranked,
    topPartyId: ranked[0].partyId,
  }
}

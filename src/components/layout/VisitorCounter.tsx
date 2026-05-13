'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function VisitorCounter() {
  const { data } = useSWR<{ count: number }>('/api/visitors', fetcher, {
    refreshInterval: 30000,
    fallbackData: { count: 0 },
  })

  const count = data?.count ?? 0
  if (count === 0) return null

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      <span>{count.toLocaleString()}명 참여 중</span>
    </div>
  )
}

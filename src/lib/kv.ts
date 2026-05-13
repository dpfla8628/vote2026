export async function getVisitorCount(): Promise<number> {
  try {
    const { kv } = await import('@vercel/kv')
    const count = await kv.get<number>('visitor_count')
    return count ?? 0
  } catch {
    return 0
  }
}

export async function incrementVisitorCount(): Promise<number> {
  try {
    const { kv } = await import('@vercel/kv')
    return await kv.incr('visitor_count')
  } catch {
    return 0
  }
}

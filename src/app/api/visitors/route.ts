import { getVisitorCount, incrementVisitorCount } from '@/lib/kv'

export async function GET() {
  const count = await getVisitorCount()
  return Response.json({ count })
}

export async function POST() {
  const count = await incrementVisitorCount()
  return Response.json({ count })
}

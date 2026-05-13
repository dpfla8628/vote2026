import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const RESULT_IMAGES: Record<string, string> = {
  minjoo: 'result-minjoo.png',
  ppp: 'result-ppp.png',
  chokuk: 'result-chokuk.png',
  reform: 'result-reform.png',
  progressive: 'result-progressive.png',
  basicincome: 'result-basicincome.png',
  justice: 'result-justice.png',
}

export const runtime = 'nodejs'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const partyId = searchParams.get('p') ?? ''
  const fileName = RESULT_IMAGES[partyId] ?? 'default.png'
  const image = await readFile(path.join(process.cwd(), 'public/og', fileName))

  return new NextResponse(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

import { VIDEOS_MOCK } from '@/shared/lib/constants/videos-mock'
import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'Что-то пошло не так на сервере' },
      { status: 500 }
    )
  }

  return NextResponse.json(VIDEOS_MOCK, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  })
}
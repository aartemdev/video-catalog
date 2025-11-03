import { VIDEOS_MOCK } from '@/shared/lib/constants/videos-mock'
import { NextResponse } from 'next/server'

export async function GET() {
  
  return NextResponse.json(VIDEOS_MOCK, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  })
}
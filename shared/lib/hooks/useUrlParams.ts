'use client'

import { useSearchParams } from 'next/navigation'
import { DurationFilter } from '@/features/video-filters/types/filter.types'

export function useUrlParams() {
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get('search') || ''
  const durationFilter = (searchParams.get('duration') || 'all') as DurationFilter

  return {
    searchQuery,
    durationFilter,
  }
}
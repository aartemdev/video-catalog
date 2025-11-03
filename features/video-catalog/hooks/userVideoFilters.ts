'use client'

import { useMemo } from 'react'
import { useDebounce } from './useDebounce'
import { filterVideos } from '../utils/filterVideos'
import { DurationFilter } from '@/features/video-filters/types/filter.types'
import { Video } from '@/shared/lib/types/video.types'

export function useVideoFilters(
  videos: Video[] | undefined,
  searchQuery: string,
  durationFilter: DurationFilter
) {
  const debouncedSearch = useDebounce(searchQuery, 300)

  const filteredVideos = useMemo(() => {
    if (!videos) return []
    return filterVideos(videos, debouncedSearch, durationFilter)
  }, [videos, debouncedSearch, durationFilter])

  return {
    filteredVideos,
    hasActiveFilters: searchQuery !== '' || durationFilter !== 'all',
  }
}
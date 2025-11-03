'use client'

import { useMemo } from 'react'
import { useDebounce } from './useDebounce'
import { filterVideos } from '../utils/filterVideos'
import { Video } from '@/shared/lib/types/video.types'
import { useUrlParams } from '@/shared/lib/hooks/useUrlParams'

export function useVideoFilters(videos?: Video[]) {
  const { searchQuery, durationFilter } = useUrlParams()
  const debouncedSearch = useDebounce(searchQuery, 300)

  const filteredVideos = useMemo(() => {
    if (!videos) return []
    return filterVideos(videos, debouncedSearch, durationFilter)
  }, [videos, debouncedSearch, durationFilter])

  return {
    filteredVideos,
    searchQuery,
    durationFilter,
    hasActiveFilters: searchQuery !== '' || durationFilter !== 'all',
  }
}
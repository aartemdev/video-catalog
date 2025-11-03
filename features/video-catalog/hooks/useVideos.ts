'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchVideos } from '@/shared/lib/api/videos.api'

export function useVideos() {
  return useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}
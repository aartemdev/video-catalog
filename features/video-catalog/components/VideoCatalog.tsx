'use client'

import { useVideos } from '../hooks/useVideos'
import { VideoGrid } from './VideoGrid'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { useVideoFilters } from '../hooks/userVideoFilters'
import { useUrlParams } from '@/shared/lib/hooks/useUrlParams'

export function VideoCatalog() {
  const { data: videos, isLoading, isError, refetch } = useVideos()
  
  const { searchQuery, durationFilter } = useUrlParams()
  
  const { filteredVideos } = useVideoFilters(videos, searchQuery, durationFilter)

  if (isError) {
    return <ErrorState onRetry={() => refetch()} />
  }

  if (isLoading) {
    return <VideoGrid isLoading />
  }

  if (filteredVideos.length === 0) {
    return <EmptyState />
  }

  return <VideoGrid videos={filteredVideos} />
}
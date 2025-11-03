'use client'

import { useVideos } from '../hooks/useVideos'
import { VideoGrid } from './VideoGrid'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { useVideoFilters } from '../hooks/userVideoFilters'

export function VideoCatalog() {
    const { data: videos, isLoading, isError, refetch } = useVideos()

    const { filteredVideos } = useVideoFilters(videos)

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
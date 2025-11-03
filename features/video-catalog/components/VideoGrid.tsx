import { Video } from '@/shared/lib/types/video.types'
import { VideoCard } from './VideoCard'
import { VideoCardSkeleton } from './VideoCardSkeleton'

type VideoGridProps = {
  videos?: Video[]
  isLoading?: boolean
}

export function VideoGrid({ videos, isLoading }: VideoGridProps) {
    if (isLoading) {
        return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
            <VideoCardSkeleton key={index} />
            ))}
        </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos?.map((video) => (
            <VideoCard key={video.id} video={video} />
        ))}
        </div>
    )
}
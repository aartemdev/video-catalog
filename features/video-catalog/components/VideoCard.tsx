import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, User } from 'lucide-react'
import { cn } from '@/shared/lib/utils/cn'
import { formatDuration } from '@/shared/lib/utils/formatDuration'
import { formatDate } from '@/shared/lib/utils/formatDate'
import { VideoCardProps } from '@/shared/lib/types/video.types'

export const VideoCard = memo(function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      href={`/videos/${video.id}`}
      className={cn(
        'block group',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg'
      )}
      aria-label={`Посмотреть видео: ${video.title} от ${video.author}`}
    >
      <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium backdrop-blur-sm">
            {formatDuration(video.durationSec)}
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>

          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <User className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{video.author}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-auto">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <time dateTime={video.publishedAt}>{formatDate(video.publishedAt)}</time>
          </div>
        </div>
      </article>
    </Link>
  )
})
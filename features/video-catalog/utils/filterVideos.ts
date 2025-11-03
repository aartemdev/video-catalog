import { DurationFilter } from '@/features/video-filters/types/filter.types'
import { DURATION_RANGES } from '../constants/duration-filters'
import { Video } from '@/shared/lib/types/video.types'

export function filterVideos(
  videos: Video[],
  searchQuery: string,
  durationFilter: DurationFilter
): Video[] {
  return videos
    .filter((video) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim()
        return video.title.toLowerCase().includes(query)
      }
      return true
    })
    .filter((video) => {
      switch (durationFilter) {
        case 'short':
          return video.durationSec < DURATION_RANGES.SHORT_MAX
        case 'medium':
          return (
            video.durationSec >= DURATION_RANGES.MEDIUM_MIN &&
            video.durationSec <= DURATION_RANGES.MEDIUM_MAX
          )
        case 'long':
          return video.durationSec > DURATION_RANGES.LONG_MIN
        default:
          return true
      }
    })
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
}
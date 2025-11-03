export type Video = {
  id: string
  title: string
  author: string
  durationSec: number
  publishedAt: string
  thumbnail: string
}

export type VideoCardProps = {
  video: Video
}
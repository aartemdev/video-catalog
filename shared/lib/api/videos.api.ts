import { Video } from "../types/video.types"

export async function fetchVideos(): Promise<Video[]> {
  const res = await fetch('/api/videos', {
    next: { 
      revalidate: 60
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch videos')
  }

  return res.json()
}
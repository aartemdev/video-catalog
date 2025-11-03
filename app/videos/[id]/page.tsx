import { VideoDetailPlaceholder } from '@/features/video-detail/components/VideoDetailPlaceholder'

type Props = {
  params: Promise<{ id: string }>
}

export default async function VideoDetailPage({ params }: Props) {
  const { id } = await params

  return <VideoDetailPlaceholder videoId={id} />
}
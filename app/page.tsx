import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchVideos } from '@/shared/lib/api/videos.api'
import { VideoCatalog } from '@/features/video-catalog/components/VideoCatalog'
import { FilterBar } from '@/features/video-filters/components/FilterBar'

export default async function HomePage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Видео Каталог
          </h1>
          <p className="text-gray-600 text-lg">
            Коллекция обучающих видео по веб-разработке
          </p>
        </header>

        <FilterBar />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <VideoCatalog />
        </HydrationBoundary>
      </div>
    </main>
  )
};

import { Suspense } from 'react'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchVideos } from '@/shared/lib/api/videos.api'
import { VideoCatalog } from '@/features/video-catalog/components/VideoCatalog'
import { FilterBar } from '@/features/video-filters/components/FilterBar'
import { VideoCardSkeleton } from '@/features/video-catalog/components/VideoCardSkeleton'

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Видео Каталог</h1>
          <p className="text-gray-600 text-lg">
            Коллекция обучающих видео по веб-разработке
          </p>
        </header>

        <Suspense
          fallback={
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 h-11 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-[200px] h-11 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
          }
        >
          <FilterBar />
        </Suspense>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <VideoCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <VideoCatalog />
          </Suspense>
        </HydrationBoundary>
      </div>
    </main>
  )
}
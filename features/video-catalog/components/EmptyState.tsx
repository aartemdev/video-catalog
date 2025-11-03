'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SearchX, RotateCcw } from 'lucide-react'

export function EmptyState() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const hasFilters = searchParams.get('search') || searchParams.get('duration')

    const handleReset = () => {
        router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <SearchX className="w-12 h-12 text-gray-400" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {hasFilters ? 'Ничего не найдено' : 'Видео отсутствуют'}
        </h2>

        <p className="text-gray-600 text-center mb-8 max-w-md">
            {hasFilters
            ? 'Попробуйте изменить параметры поиска или сбросить фильтры'
            : 'К сожалению, в каталоге пока нет видео'}
        </p>

        {hasFilters && (
            <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
            <RotateCcw className="w-4 h-4" />
            Сбросить фильтры
            </button>
        )}
        </div>
    )
}
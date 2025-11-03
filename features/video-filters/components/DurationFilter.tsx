'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Clock } from 'lucide-react'
import { cn } from '@/shared/lib/utils/cn'
import { DurationFilter as DurationFilterType } from '../types/filter.types'

const DURATION_OPTIONS = [
  { value: 'all', label: 'Любая длительность' },
  { value: 'short', label: 'Короткие (<5 мин)' },
  { value: 'medium', label: 'Средние (5-20 мин)' },
  { value: 'long', label: 'Длинные (>20 мин)' },
] as const

export function DurationFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentFilter = (searchParams.get('duration') || 'all') as DurationFilterType

  const handleFilterChange = (value: DurationFilterType) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === 'all') {
      params.delete('duration')
    } else {
      params.set('duration', value)
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="relative min-w-[200px]">
      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />

      <select
        value={currentFilter}
        onChange={(e) => handleFilterChange(e.target.value as DurationFilterType)}
        className={cn(
          'w-full pl-10 pr-10 py-2.5 rounded-lg appearance-none',
          'border-2 border-gray-300 bg-white',
          'text-gray-900 font-medium',
          'hover:border-blue-400 hover:shadow-md',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'transition-all duration-200 cursor-pointer',
          'shadow-sm'
        )}
      >
        {DURATION_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {currentFilter !== 'all' && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
      )}
    </div>
  )
}
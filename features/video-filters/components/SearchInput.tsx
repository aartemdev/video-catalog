'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { cn } from '@/shared/lib/utils/cn'

export function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const urlSearch = searchParams.get('search') || ''
    if (urlSearch !== inputValue) {
      setInputValue(urlSearch)
    }
  }, [searchParams])

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (inputValue) {
        params.set('search', inputValue)
      } else {
        params.delete('search')
      }

      const newUrl = `/?${params.toString()}`
      const currentUrl = `/?${searchParams.toString()}`
      
      if (newUrl !== currentUrl) {
        router.push(newUrl)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [inputValue, searchParams, router])

  const handleClear = () => {
    setInputValue('')
  }

  return (
    <div className="relative flex-1 min-w-[200px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

      <input
        type="search"
        placeholder="Поиск по названию..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={cn(
          'w-full pl-10 pr-10 py-2.5 rounded-lg',
          'border border-gray-300 bg-white',
          'text-gray-900 placeholder:text-gray-500',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'transition-shadow'
        )}
      />

      {inputValue && (
        <button
          onClick={handleClear}
          className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2',
            'text-gray-400 hover:text-gray-600',
            'focus:outline-none focus:text-gray-600',
            'transition-colors'
          )}
          aria-label="Очистить поиск"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
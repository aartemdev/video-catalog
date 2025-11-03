import { describe, it, expect } from 'vitest'
import { formatDuration } from '@/shared/lib/utils/formatDuration'

describe('formatDuration', () => {
  it('форматирует секунды меньше минуты', () => {
    expect(formatDuration(30)).toBe('0:30')
    expect(formatDuration(45)).toBe('0:45')
  })

  it('форматирует секунды меньше часа', () => {
    expect(formatDuration(125)).toBe('2:05')
    expect(formatDuration(240)).toBe('4:00')
    expect(formatDuration(599)).toBe('9:59')
  })

  it('форматирует секунды больше или равно часу', () => {
    expect(formatDuration(3600)).toBe('1:00:00')
    expect(formatDuration(3661)).toBe('1:01:01')
    expect(formatDuration(7200)).toBe('2:00:00')
  })

  it('обрабатывает граничные случаи', () => {
    expect(formatDuration(0)).toBe('0:00')
    expect(formatDuration(1)).toBe('0:01')
    expect(formatDuration(59)).toBe('0:59')
    expect(formatDuration(60)).toBe('1:00')
  })

  it('правильно добавляет нули', () => {
    expect(formatDuration(65)).toBe('1:05')
    expect(formatDuration(605)).toBe('10:05')
    expect(formatDuration(3605)).toBe('1:00:05')
  })
})
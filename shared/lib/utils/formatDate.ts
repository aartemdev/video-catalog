export function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Сегодня'
  if (diffDays === 1) return 'Вчера'
  if (diffDays < 7) return `${diffDays} дн. назад`
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} нед. назад`
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} мес. назад`
  }

  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
export type DurationFilter = 'all' | 'short' | 'medium' | 'long'

export type FilterState = {
  searchQuery: string
  durationFilter: DurationFilter
}
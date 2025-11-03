import { SearchInput } from './SearchInput'
import { DurationFilter } from './DurationFilter'

export function FilterBar() {
    return (
        <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
            <SearchInput />
            <DurationFilter />
        </div>
        </div>
    )
}
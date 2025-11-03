import { cn } from '@/shared/lib/utils/cn'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    return (
        <span
        className={cn(
            'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
            {
            'bg-blue-100 text-blue-800': variant === 'default',
            'bg-gray-100 text-gray-800': variant === 'secondary',
            'bg-green-100 text-green-800': variant === 'success',
            'bg-yellow-100 text-yellow-800': variant === 'warning',
            },
            className
        )}
        >
        {children}
        </span>
    )
}
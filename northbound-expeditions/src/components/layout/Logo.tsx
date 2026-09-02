import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Logo({ className, onClick, tone = 'auto' }: { className?: string; onClick?: () => void; tone?: 'auto' | 'light' }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Northbound Expeditions — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <path
          d="M3 20 10 7l3.5 6L16 9l5 11Z"
          className={tone === 'light' ? 'stroke-paper' : 'stroke-current'}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="16.5" cy="6.5" r="1.8" className="fill-signal" />
      </svg>
      <span
        className={cn(
          'font-display text-lg tracking-tight',
          tone === 'light' ? 'text-paper' : 'text-ink',
        )}
      >
        Northbound
      </span>
    </Link>
  )
}

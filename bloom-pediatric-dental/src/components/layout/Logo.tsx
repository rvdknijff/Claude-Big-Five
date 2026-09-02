import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Bloom kindertandarts — home"
      className={cn('group inline-flex items-center gap-2', className)}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-sage" aria-hidden="true">
        <path
          d="M16 28V15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M16 16c-.5-5 1.8-8.5 7.5-9 .6 5.2-1.8 8.6-7.5 9Z"
          fill="currentColor"
          className="origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:-rotate-6"
        />
        <path
          d="M16 18c-.5-4.5-2.8-7-8-7.5-.6 4.7 1.8 7.7 8 7.5Z"
          fill="currentColor"
          fillOpacity="0.62"
          className="origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:rotate-6"
        />
        <circle cx="16" cy="9" r="3" className="fill-blush" />
      </svg>
      <span className="font-display text-2xl font-semibold lowercase tracking-tight text-ink">
        bloom
      </span>
    </Link>
  )
}

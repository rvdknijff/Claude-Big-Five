import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Blackline Motorworks — home"
      className={cn(
        'group inline-flex items-baseline gap-2 font-display text-sm font-bold uppercase tracking-[0.28em] text-fg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="mr-1 inline-block h-3 w-[3px] translate-y-[1px] bg-signal transition-[height] duration-300 group-hover:h-4"
      />
      Blackline
      <span className="font-mono text-[0.62rem] font-medium tracking-[0.22em] text-fg-dim">
        MOTORWORKS
      </span>
    </Link>
  )
}

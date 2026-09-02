import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="NIGHTSHIFT — home"
      className={cn(
        'font-display text-lg font-extrabold uppercase leading-none tracking-[-0.04em] text-bone',
        className,
      )}
    >
      NIGHT<span className="text-acid">/</span>SHIFT
    </Link>
  )
}

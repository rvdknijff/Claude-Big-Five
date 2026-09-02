import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Ledger & Loom — home"
      className={cn('group inline-flex items-baseline gap-1.5 text-ink', className)}
    >
      <span className="font-serif text-2xl leading-none">Ledger</span>
      <span className="font-mono text-xs text-accent">&amp;</span>
      <span className="font-serif text-2xl leading-none">Loom</span>
    </Link>
  )
}

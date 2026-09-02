import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'acid' | 'bone' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  className?: string
  to?: string
  href?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.06em] transition-[transform,box-shadow,background-color,color] duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  acid: 'bg-acid px-6 py-3.5 text-black shadow-[4px_4px_0_0_var(--color-bone)] hover:shadow-[6px_6px_0_0_var(--color-bone)]',
  bone: 'bg-bone px-6 py-3.5 text-black shadow-[4px_4px_0_0_var(--color-acid)] hover:shadow-[6px_6px_0_0_var(--color-acid)]',
  ghost: 'border-2 border-bone px-6 py-3.5 text-bone hover:bg-bone hover:text-black',
}

export function Button({
  children,
  variant = 'acid',
  className,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className)
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

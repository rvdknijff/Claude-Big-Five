import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'solid' | 'outline' | 'text'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  className?: string
  withArrow?: boolean
  to?: string
  href?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

const base =
  'group inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  solid: 'bg-ink px-5 py-3 text-page hover:bg-accent hover:text-accent-ink',
  outline: 'border border-ink px-5 py-3 text-ink hover:bg-ink hover:text-page',
  text: 'py-1 text-ink hover:text-accent',
}

export function Button({
  children,
  variant = 'solid',
  className,
  withArrow,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className)
  const inner = (
    <>
      {children}
      {withArrow && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </>
  )
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </a>
    )
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}

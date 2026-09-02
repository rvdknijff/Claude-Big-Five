import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'blush' | 'sage' | 'outline'
type Size = 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  to?: string
  href?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-extrabold tracking-tight transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.34,1.3,0.64,1)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none'

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-[0.95rem]',
  lg: 'px-8 py-4 text-base',
}

const variants: Record<Variant, string> = {
  blush: 'bg-blush text-ink shadow-[0_10px_24px_-12px_var(--color-blush-deep)] hover:bg-blush-deep hover:text-paper',
  sage: 'bg-sage text-paper shadow-[0_10px_24px_-12px_var(--color-sage-deep)] hover:bg-sage-deep',
  outline: 'border-2 border-ink/25 text-ink hover:border-ink/50 hover:bg-ink/[0.04]',
}

export function Button({
  children,
  variant = 'blush',
  size = 'md',
  className,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = cn(base, sizes[size], variants[variant], className)
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

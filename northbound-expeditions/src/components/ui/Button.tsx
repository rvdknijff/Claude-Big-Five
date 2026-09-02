import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'solid' | 'outline' | 'link'

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
  'group inline-flex items-center gap-2.5 font-body text-sm font-medium transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  solid: 'rounded-[3px] bg-bark px-6 py-3 text-paper hover:bg-forest',
  outline: 'rounded-[3px] border border-ink/25 px-6 py-3 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  link: 'text-ink underline-offset-4 hover:text-signal hover:underline',
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
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
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

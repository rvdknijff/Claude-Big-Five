import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  className?: string
  withArrow?: boolean
  /** internal route — renders a router Link */
  to?: string
  /** external / protocol link — renders an anchor */
  href?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

const base =
  'group inline-flex items-center justify-center gap-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none'

const styles: Record<Variant, string> = {
  primary: 'chamfer bg-signal px-6 py-3.5 text-base hover:bg-signal-bright',
  outline: 'border border-fg-muted/60 px-6 py-3.5 text-fg hover:border-fg hover:bg-fg hover:text-base',
  ghost: 'px-0 py-2 text-fg hover:text-signal-bright',
}

export function Button({
  children,
  variant = 'primary',
  className,
  withArrow,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = cn(base, styles[variant], className)
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}

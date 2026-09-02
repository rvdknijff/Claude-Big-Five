import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
  /** how it enters */
  from?: 'up' | 'left' | 'scale'
}

/** Gentle scroll-in reveal with a soft, slightly springy ease. */
export function Reveal({ children, delay = 0, className, as, from = 'up' }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInViewOnce<HTMLElement>()

  if (reduced) return <Tag className={className}>{children}</Tag>

  const hidden = !inView
  const transform =
    from === 'left'
      ? 'translateX(-28px)'
      : from === 'scale'
        ? 'scale(0.94)'
        : 'translateY(28px)'

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transition: `opacity 0.65s ease ${delay}s, transform 0.7s cubic-bezier(0.34,1.3,0.64,1) ${delay}s`,
        opacity: hidden ? 0 : 1,
        transform: hidden ? transform : 'none',
      }}
    >
      {children}
    </Tag>
  )
}

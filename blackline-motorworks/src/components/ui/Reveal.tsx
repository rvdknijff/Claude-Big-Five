import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  /** stagger delay in seconds */
  delay?: number
  /** 'up' rises from below, 'wipe' slides in from the left behind a mask */
  variant?: 'up' | 'wipe'
  className?: string
  as?: ElementType
}

/**
 * Scroll-in reveal built on a plain IntersectionObserver + CSS transition —
 * deliberately not a motion library, so content is never stuck hidden and the
 * transform stays on the compositor. Honours prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, variant = 'up', className, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInViewOnce<HTMLElement>()

  if (reduced) {
    return <Tag className={className}>{children}</Tag>
  }

  const hidden = !inView
  const isWipe = variant === 'wipe'

  return (
    <Tag
      ref={ref}
      className={cn(isWipe && 'overflow-hidden', className)}
      style={{
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        opacity: hidden ? 0 : 1,
        transform: hidden
          ? isWipe
            ? 'translateX(-6%)'
            : 'translateY(24px)'
          : 'none',
      }}
    >
      {children}
    </Tag>
  )
}

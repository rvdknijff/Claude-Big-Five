import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

/** Restrained editorial reveal: a small rise + fade, IntersectionObserver + CSS. */
export function Reveal({ children, delay = 0, className, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInViewOnce<HTMLElement>()

  if (reduced) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transition: `opacity 0.8s var(--ease-out) ${delay}s, transform 0.8s var(--ease-out) ${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(18px)',
      }}
    >
      {children}
    </Tag>
  )
}

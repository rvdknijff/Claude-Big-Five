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

/** Brutalist reveal: a hard stepped slide-in, IntersectionObserver + CSS. */
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
        transition: `opacity 0.25s steps(3) ${delay}s, transform 0.4s steps(5) ${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translate3d(-14px, 0, 0)',
      }}
    >
      {children}
    </Tag>
  )
}

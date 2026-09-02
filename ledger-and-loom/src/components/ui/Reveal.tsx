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

/** Swiss-minimal reveal: an 8px lift + fade, IntersectionObserver + CSS only. */
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
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.2,0.7,0.2,1) ${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(10px)',
      }}
    >
      {children}
    </Tag>
  )
}

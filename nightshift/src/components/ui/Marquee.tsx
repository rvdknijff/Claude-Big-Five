import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface MarqueeProps {
  children: ReactNode
  /** seconds for one full loop */
  duration?: number
  reverse?: boolean
  className?: string
}

/** A kinetic scrolling strip. Content is duplicated so the loop is seamless. */
export function Marquee({ children, duration = 30, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="marquee-track"
        style={{
          ['--marquee-dur' as string]: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <span className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </span>
        <span className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  )
}

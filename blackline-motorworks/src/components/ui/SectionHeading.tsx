import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** small mono eyebrow, e.g. "02 / EXPERTISE" */
  label: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Reveal>
        <p className="label flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-signal" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl leading-[1.08] sm:text-4xl md:text-[2.75rem]">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-fg-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

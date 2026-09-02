import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

interface SectionIntroProps {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionIntro({ eyebrow, title, body, align = 'left', className }: SectionIntroProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(1.85rem,4vw,2.9rem)]">{title}</h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{body}</p>
        </Reveal>
      )}
    </div>
  )
}

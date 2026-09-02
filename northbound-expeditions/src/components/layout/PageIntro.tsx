import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'

interface PageIntroProps {
  label: string
  title: ReactNode
  intro?: ReactNode
  meta?: ReactNode
}

export function PageIntro({ label, title, intro, meta }: PageIntroProps) {
  return (
    <header className="page-x mx-auto max-w-[var(--container-page)] pb-12 pt-28 md:pb-16 md:pt-40">
      <p className="label">{label}</p>
      <Reveal>
        <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02]">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>
      )}
      {meta && <div className="mt-8">{meta}</div>}
    </header>
  )
}

import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'

interface PageHeaderProps {
  label: string
  title: ReactNode
  intro?: ReactNode
}

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="page-x mx-auto max-w-[var(--container-page)] pb-14 pt-32 md:pb-20 md:pt-44">
      <p className="label flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-10 bg-signal" />
        {label}
      </p>
      <Reveal>
        <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.94] tracking-[-0.02em]">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.06}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted">{intro}</p>
        </Reveal>
      )}
    </header>
  )
}

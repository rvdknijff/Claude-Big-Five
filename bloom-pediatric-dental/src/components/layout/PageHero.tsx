import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { Flower, Sparkle } from '@/components/ui/decor'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'sage' | 'blush' | 'sky' | 'sun'
}

const tones = {
  sage: 'bg-sage-soft',
  blush: 'bg-blush-soft',
  sky: 'bg-sky-soft',
  sun: 'bg-sun-soft',
}

export function PageHero({ eyebrow, title, intro, tone = 'sage' }: PageHeroProps) {
  return (
    <header className={`relative overflow-hidden ${tones[tone]}`}>
      <Flower className="pointer-events-none absolute -right-6 top-10 h-24 w-24 text-paper/70 float-slow" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-24 hidden h-8 w-8 text-sun md:block float-med" />
      <div className="page-x mx-auto max-w-[var(--container-page)] pb-16 pt-32 md:pb-24 md:pt-40">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.05]">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>
          </Reveal>
        )}
      </div>
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="block h-6 w-full text-paper md:h-10"
        aria-hidden="true"
      >
        <path d="M0 48V20c220 24 400 24 620 4S1040-4 1240 8s120 20 200 16v24Z" fill="currentColor" />
      </svg>
    </header>
  )
}

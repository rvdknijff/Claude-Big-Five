import type { ReactNode } from 'react'

interface PageTitleProps {
  index: string
  title: string
  sub?: ReactNode
}

export function PageTitle({ index, title, sub }: PageTitleProps) {
  return (
    <header className="page-x mx-auto max-w-[var(--container-page)] border-b-2 border-bone pb-8 pt-10 md:pb-12 md:pt-16">
      <p className="label">{index}</p>
      <h1 className="mt-3 font-display text-[clamp(2.75rem,12vw,9rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.05em]">
        {title}
      </h1>
      {sub && <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-ash">{sub}</p>}
    </header>
  )
}

import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'

interface PageHeadProps {
  index: string
  kicker: string
  title: ReactNode
  standfirst?: ReactNode
}

/** Swiss page header: an index number, a mono kicker and a large sans title on the grid. */
export function PageHead({ index, kicker, title, standfirst }: PageHeadProps) {
  return (
    <header className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink pb-10 pt-16 md:pb-14 md:pt-24">
      <div className="grid12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-8">
          <p className="label flex items-center gap-3">
            <span className="text-accent">{index}</span>
            {kicker}
          </p>
          <Reveal>
            <h1 className="mt-4 text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em]">
              {title}
            </h1>
          </Reveal>
        </div>
        {standfirst && (
          <Reveal delay={0.05} className="col-span-12 md:col-span-4">
            <p className="text-sm leading-relaxed text-ink-2">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </header>
  )
}

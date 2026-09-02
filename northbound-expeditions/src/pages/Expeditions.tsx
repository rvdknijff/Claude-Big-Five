import { useMemo, useState } from 'react'
import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { expeditions, difficultyLabel } from '@/data/expeditions'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/Reveal'
import { ExpeditionCard } from '@/components/expeditions/ExpeditionCard'

const sorts = ['By difficulty', 'By length', 'By season'] as const

export function Expeditions() {
  const [sort, setSort] = useState<(typeof sorts)[number]>('By difficulty')

  const sorted = useMemo(() => {
    const list = [...expeditions]
    if (sort === 'By difficulty') list.sort((a, b) => a.difficulty - b.difficulty)
    if (sort === 'By length') list.sort((a, b) => a.days - b.days)
    if (sort === 'By season') {
      const order = ['February', 'May', 'June', 'August', 'September']
      list.sort((a, b) => order.indexOf(a.month) - order.indexOf(b.month))
    }
    return list
  }, [sort])

  return (
    <>
      <Seo
        title="Expeditions"
        description="Five small-group expeditions: the Arctic Circle Winter Traverse in Swedish Lapland, the Lofoten Midnight Sun Trek, the Iceland Highlands Crossing, the Isle of Skye Wild Trek and the Faroe Islands Coast to Coast."
      />
      <PageIntro
        label="The expeditions"
        title={<>Every trip we run, <em>all five</em> of them</>}
        intro="We would rather run five routes properly than twenty badly. Each one goes a handful of times a year, in a fixed weather window, with the same guides."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-32">
        <div
          role="group"
          aria-label="Sort expeditions"
          className="rule flex flex-wrap items-center gap-2 border-ink/20 py-4"
        >
          {sorts.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSort(s)}
              aria-pressed={sort === s}
              className={cn(
                'rounded-[3px] px-3 py-1.5 text-sm transition-colors',
                sort === s ? 'bg-bark text-paper' : 'text-ink-soft hover:text-ink',
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {sorted.map((exp, i) => (
            <Reveal key={exp.slug} delay={(i % 2) * 0.06}>
              <ExpeditionCard exp={exp} size="lg" />
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{exp.summary}</p>
              <p className="mt-2 text-xs text-ink-faint">
                {difficultyLabel[exp.difficulty]} · {exp.tempRange} · max 8
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

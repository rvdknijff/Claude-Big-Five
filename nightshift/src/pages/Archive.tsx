import { useState } from 'react'
import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { editions } from '@/data/archive'
import { ArchivePoster } from '@/components/archive/ArchivePoster'
import { cn } from '@/lib/cn'

export function Archive() {
  const [year, setYear] = useState(editions[0].year)
  const edition = editions.find((e) => e.year === year) ?? editions[0]

  return (
    <>
      <Seo
        title="Archive"
        description="Every NIGHTSHIFT so far — 2023 to 2026. Posters, line-ups and the story of how a one-warehouse test became a four-venue festival."
      />
      <PageTitle
        index="05 / Archive"
        title="Archive"
        sub="Four editions, from one borrowed rig in a warehouse to four venues along the water. Pick a year."
      />

      <div className="page-x mx-auto grid max-w-[var(--container-page)] gap-10 py-10 md:grid-cols-[1fr_1.3fr] md:py-14 lg:gap-16">
        {/* year list */}
        <div>
          <ul className="border-t-2 border-bone">
            {editions.map((e) => (
              <li key={e.year} className="border-b-2 border-line">
                <button
                  type="button"
                  onClick={() => setYear(e.year)}
                  aria-pressed={year === e.year}
                  className="group flex w-full items-baseline justify-between gap-4 py-4 text-left"
                >
                  <span
                    className={cn(
                      'font-display text-[clamp(2.5rem,9vw,5rem)] font-extrabold uppercase leading-none tracking-[-0.04em] transition-colors',
                      year === e.year ? 'text-acid' : 'text-bone group-hover:text-acid',
                    )}
                  >
                    {e.year}
                  </span>
                  <span className="text-right font-mono text-xs uppercase text-ash">
                    {e.venues} venue{e.venues > 1 ? 's' : ''}
                    <br />
                    {e.acts} acts
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-acid">
              {edition.tagline}
            </p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-bone/85">{edition.note}</p>
            <p className="mt-4 font-mono text-xs uppercase text-ash">
              Headlined by {edition.headliners.join(' · ')}
            </p>
          </div>
        </div>

        {/* poster */}
        <div className="border-2 border-bone">
          <ArchivePoster key={edition.year} edition={edition} />
        </div>
      </div>
    </>
  )
}

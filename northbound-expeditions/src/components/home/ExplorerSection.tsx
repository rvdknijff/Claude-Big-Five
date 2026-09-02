import { useState } from 'react'
import { Link } from 'react-router-dom'
import { expeditions } from '@/data/expeditions'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { DifficultyMeter } from '@/components/ui/DifficultyMeter'

export function ExplorerSection() {
  const [hover, setHover] = useState(expeditions[0].slug)
  const active = expeditions.find((e) => e.slug === hover) ?? expeditions[0]

  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-20 md:py-28">
      <div className="rule border-ink/20 pb-6">
        <p className="label">The expeditions</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04]">
            Five routes, each run a handful of times a year
          </h2>
          <Button to="/expeditions" variant="link" withArrow className="mb-2">
            All expeditions & dates
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_minmax(0,26rem)] lg:gap-16">
        {/* editorial list */}
        <ol>
          {expeditions.map((e, i) => (
            <li key={e.slug} className="border-b border-ink/12">
              <Link
                to={`/expeditions/${e.slug}`}
                onMouseEnter={() => setHover(e.slug)}
                onFocus={() => setHover(e.slug)}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-4 py-6 md:gap-8 md:py-8"
              >
                <span className="font-display text-sm text-ink-faint">0{i + 1}</span>
                <span>
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-2xl text-ink transition-colors group-hover:text-signal md:text-3xl">
                      {e.name}
                    </span>
                    <span className="text-sm text-ink-faint">{e.country}</span>
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
                    <span>{e.days} days</span>
                    <span>{e.month}</span>
                    <span>{e.tempRange}</span>
                    <DifficultyMeter level={e.difficulty} showLabel={false} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* preview panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
              {expeditions.map((e) => (
                <img
                  key={e.slug}
                  src={e.cardImage.src}
                  width={e.cardImage.width}
                  height={e.cardImage.height}
                  alt={e.cardImage.alt}
                  loading="lazy"
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                    e.slug === active.slug ? 'opacity-100' : 'opacity-0',
                  )}
                />
              ))}
            </div>
          </Reveal>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{active.summary}</p>
          <dl className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="label !text-[0.62rem]">Distance</dt>
              <dd className="mt-1 font-display text-lg">{active.distanceKm} km</dd>
            </div>
            <div>
              <dt className="label !text-[0.62rem]">Ascent</dt>
              <dd className="mt-1 font-display text-lg">{active.ascentM} m</dd>
            </div>
            <div>
              <dt className="label !text-[0.62rem]">From</dt>
              <dd className="mt-1 font-display text-lg">€{active.priceFrom}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

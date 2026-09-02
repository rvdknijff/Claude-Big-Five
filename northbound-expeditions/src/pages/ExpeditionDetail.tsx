import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { expeditions, getExpedition, difficultyLabel } from '@/data/expeditions'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { DifficultyMeter } from '@/components/ui/DifficultyMeter'
import { RouteProfile } from '@/components/expeditions/RouteProfile'
import { ScrollStory } from '@/components/expeditions/ScrollStory'

export function ExpeditionDetail() {
  const { slug } = useParams()
  const exp = slug ? getExpedition(slug) : undefined

  if (!exp) {
    return (
      <div className="page-x mx-auto max-w-3xl py-48 text-center">
        <Seo title="Expedition not found" description="This expedition could not be found." />
        <p className="label">404</p>
        <h1 className="mt-3 font-display text-4xl">Expedition not found</h1>
        <div className="mt-8 flex justify-center">
          <Button to="/expeditions" withArrow>
            All expeditions
          </Button>
        </div>
      </div>
    )
  }

  const idx = expeditions.findIndex((e) => e.slug === exp.slug)
  const next = expeditions[(idx + 1) % expeditions.length]

  const facts = [
    { k: 'Duration', v: `${exp.days} days` },
    { k: 'Season', v: `${exp.month} · ${exp.season}` },
    { k: 'Distance', v: `${exp.distanceKm} km` },
    { k: 'Total ascent', v: `${exp.ascentM} m` },
    { k: 'Temperature', v: exp.tempRange },
    { k: 'Group size', v: `4–${site.groupMax} guests` },
  ]

  return (
    <>
      <Seo
        title={exp.name}
        description={`${exp.country}. ${exp.summary}`}
      />

      <article>
        {/* hero */}
        <div className="relative h-svh min-h-[30rem] overflow-hidden">
          <img
            src={exp.heroImage.src}
            width={exp.heroImage.width}
            height={exp.heroImage.height}
            alt={exp.heroImage.alt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/20 to-bark/40" />
          <div className="page-x relative mx-auto flex h-full max-w-[var(--container-page)] flex-col justify-end pb-14 text-paper md:pb-20">
            <Link
              to="/expeditions"
              className="mb-6 inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> All expeditions
            </Link>
            <p className="label !text-paper/70">{exp.country} · {exp.region}</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98]">
              {exp.name}
            </h1>
            <DifficultyMeter level={exp.difficulty} tone="light" className="mt-5" />
          </div>
        </div>

        {/* facts strip */}
        <div className="border-b border-ink/12 bg-paper-dim">
          <dl className="page-x mx-auto grid max-w-[var(--container-page)] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {facts.map((f) => (
              <div key={f.k} className="border-r border-ink/10 py-5 pr-4 last:border-r-0">
                <dt className="label !text-[0.6rem]">{f.k}</dt>
                <dd className="mt-1 font-display text-lg text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* intro */}
        <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <p className="label">The brief</p>
            <div className="max-w-2xl">
              <p className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.3] text-ink">
                {exp.summary}
              </p>
              <p className="mt-6 leading-relaxed text-ink-soft">{exp.intro}</p>
            </div>
          </div>
        </section>

        {/* route */}
        <section className="border-y border-ink/12 bg-paper-dim py-16 md:py-24">
          <div className="page-x mx-auto max-w-[var(--container-page)]">
            <p className="label">The route</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.5rem)]">
              Day by day, {exp.distanceKm} km end to end
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-soft">
              Hover a day to see it on the elevation profile. Distances and ascent are
              approximate — the guides adjust to conditions.
            </p>
            <div className="mt-10">
              <RouteProfile exp={exp} />
            </div>
          </div>
        </section>

        {/* story */}
        <section className="page-x mx-auto max-w-[var(--container-page)] py-8 md:py-12">
          <p className="label">On the ground</p>
          <div className="mt-4">
            <ScrollStory beats={exp.story} imageSide={idx % 2 === 0 ? 'left' : 'right'} />
          </div>
        </section>

        {/* practicalities */}
        <section className="border-t border-ink/12 py-16 md:py-24">
          <div className="page-x mx-auto grid max-w-[var(--container-page)] gap-12 md:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-2xl">What&rsquo;s included</h2>
              <ul className="mt-5 space-y-2.5">
                {exp.included.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="text-signal" aria-hidden="true">
                      +
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <h2 className="mt-10 font-display text-2xl">Where you sleep</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{exp.sleeping}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl">What to bring</h2>
              <ul className="mt-5 space-y-2.5">
                {exp.bring.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="text-ink-faint" aria-hidden="true">
                      —
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-ink-faint">
                A full kit list, packed and weighed, goes to every guest after booking.
              </p>
            </div>
          </div>
        </section>

        {/* price + cta */}
        <section className="bg-bark py-16 text-paper md:py-20">
          <div className="page-x mx-auto flex max-w-[var(--container-page)] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="label !text-paper/50">{difficultyLabel[exp.difficulty]} expedition</p>
              <p className="mt-2 font-display text-3xl">
                From €{exp.priceFrom}
                <span className="ml-2 align-middle text-sm text-paper/60">per person</span>
              </p>
            </div>
            <Button
              to="/contact"
              className="!bg-paper !text-bark hover:!bg-signal hover:!text-paper"
              withArrow
            >
              Enquire about {exp.month.toLowerCase()} dates
            </Button>
          </div>
        </section>

        {/* next */}
        <Link
          to={`/expeditions/${next.slug}`}
          className="page-x group mx-auto flex max-w-[var(--container-page)] items-center justify-between border-t border-ink/12 py-12 md:py-16"
        >
          <span>
            <span className="label">Next expedition</span>
            <span className="mt-2 block font-display text-2xl md:text-3xl">{next.name}</span>
          </span>
          <ArrowRight
            className="size-6 transition-transform duration-300 group-hover:translate-x-2"
            aria-hidden="true"
          />
        </Link>
      </article>
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import {
  cases,
  getCase,
  studioNorteCash,
  frame37Projects,
  abelHirePlan,
} from '@/data/cases'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CashLine } from '@/components/viz/CashLine'
import { MarginBars } from '@/components/viz/MarginBars'
import { HirePlanChart } from '@/components/viz/HirePlanChart'
import { RunwayGauge } from '@/components/viz/RunwayGauge'

export function CaseStudy() {
  const { slug } = useParams()
  const c = slug ? getCase(slug) : undefined

  if (!c) {
    return (
      <div className="page-x mx-auto max-w-3xl py-40 text-center">
        <Seo title="Case not found" description="This case could not be found." />
        <p className="label">404</p>
        <h1 className="mt-3 text-4xl tracking-[-0.03em]">Case not found</h1>
        <div className="mt-8 flex justify-center">
          <Button to="/cases" withArrow>
            All cases
          </Button>
        </div>
      </div>
    )
  }

  const idx = cases.findIndex((x) => x.slug === c.slug)
  const next = cases[(idx + 1) % cases.length]

  return (
    <>
      <Seo title={`${c.client} — case`} description={`${c.sector}. ${c.oneLiner}`} />

      <article>
        <header className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink pb-12 pt-16 md:pb-16 md:pt-24">
          <Link
            to="/cases"
            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-3 hover:text-ink"
          >
            ← Cases
          </Link>
          <div className="grid12 mt-8 items-end gap-y-6">
            <div className="col-span-12 md:col-span-8">
              <p className="label">{c.sector} · {c.year}</p>
              <h1 className="mt-3 text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
                {c.client}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <span className="block font-serif text-[clamp(2.5rem,6vw,4rem)] italic leading-none text-accent">
                {c.headlineMetric.value}
              </span>
              <span className="mt-2 block font-mono text-[0.68rem] uppercase tracking-wider text-ink-3">
                {c.headlineMetric.label}
              </span>
            </div>
          </div>
        </header>

        {/* challenge */}
        <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
          <div className="grid12 gap-y-4">
            <p className="label col-span-12 md:col-span-2">The challenge</p>
            <p className="col-span-12 font-serif text-[clamp(1.3rem,2.6vw,1.9rem)] italic leading-[1.4] text-ink md:col-span-9 md:col-start-4">
              {c.challenge}
            </p>
          </div>
        </section>

        {/* visualisation */}
        <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
          <p className="label">The numbers</p>
          <Reveal className="mt-8">
            {c.viz === 'runway' && (
              <div className="space-y-10">
                <RunwayGauge before={studioNorteCash.runwayBefore} after={studioNorteCash.runwayAfter} />
                <div className="border border-line p-4 md:p-6">
                  <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
                    Cash balance across the year
                  </p>
                  <CashLine
                    months={studioNorteCash.months}
                    before={studioNorteCash.before}
                    after={studioNorteCash.after}
                  />
                </div>
              </div>
            )}
            {c.viz === 'margins' && (
              <div className="border border-line p-4 md:p-6">
                <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
                  Project margin, before and after the rate-card rebuild
                </p>
                <MarginBars projects={frame37Projects} />
              </div>
            )}
            {c.viz === 'hirePlan' && (
              <div className="border border-line p-4 md:p-6">
                <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
                  Twelve-month projection — the shaded gap is the buffer
                </p>
                <HirePlanChart
                  months={abelHirePlan.months}
                  revenue={abelHirePlan.revenue}
                  costsBaseline={abelHirePlan.costsBaseline}
                  costsWithHire={abelHirePlan.costsWithHire}
                  hireMonthIndex={abelHirePlan.hireMonthIndex}
                />
              </div>
            )}
          </Reveal>
        </section>

        {/* what we did / outcome */}
        <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
          <div className="grid12 gap-y-10">
            <div className="col-span-12 md:col-span-6 md:border-r md:border-line md:pr-10">
              <h2 className="text-xl tracking-[-0.02em]">What we did</h2>
              <ul className="mt-5 space-y-3">
                {c.whatWeDid.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                    <span className="font-mono text-line-strong">·</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 md:pl-10">
              <h2 className="text-xl tracking-[-0.02em]">What changed</h2>
              <ul className="mt-5 space-y-3">
                {c.outcome.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                    <span className="text-accent">+</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* quote */}
        <section className="page-x mx-auto max-w-[var(--container-page)] py-14 md:py-20">
          <blockquote className="mx-auto max-w-3xl">
            <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] italic leading-[1.35] text-ink">
              &ldquo;{c.quote}&rdquo;
            </p>
            <footer className="mt-5 font-mono text-[0.72rem] uppercase tracking-wider text-ink-3">
              {c.quoteBy}
            </footer>
          </blockquote>
        </section>

        <Link
          to={`/cases/${next.slug}`}
          className="group flex items-center justify-between border-t border-ink px-5 py-10 md:px-8 md:py-14"
        >
          <span>
            <span className="label">Next case</span>
            <span className="mt-2 block text-2xl tracking-[-0.02em] md:text-3xl">{next.client}</span>
          </span>
          <span aria-hidden="true" className="text-2xl transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </article>
    </>
  )
}

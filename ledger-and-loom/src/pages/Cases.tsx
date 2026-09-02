import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageHead } from '@/components/layout/PageHead'
import { cases } from '@/data/cases'
import { Reveal } from '@/components/ui/Reveal'

export function Cases() {
  return (
    <>
      <Seo
        title="Cases"
        description="How Ledger & Loom helped Studio Norte, Frame/37 and Abel Architecture — from chaotic cashflow to six months of runway, from invisible margins to a rate card, from nerves about the first hire to a planned trigger."
      />
      <PageHead
        index="02"
        kicker="Cases"
        title={<>Three studios,<br />three numbers</>}
        standfirst="Names changed, numbers real in shape. Each of these started with the same feeling — the work is good, the money is a fog — and ended with a figure the founder could point to."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)]">
        {cases.map((c, i) => (
          <Reveal key={c.slug} as="article">
            <Link
              to={`/cases/${c.slug}`}
              className="group grid12 gap-y-6 border-b border-line py-14 md:py-20"
            >
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono text-sm text-line-strong">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="label">{c.sector} · {c.year}</p>
                <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {c.client}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-2">{c.oneLiner}</p>
                <span aria-hidden="true" className="mt-5 inline-block font-mono text-xs text-ink-3 group-hover:text-accent">
                  Read the case →
                </span>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right">
                <span className="block font-serif text-[clamp(2.5rem,7vw,4.5rem)] italic leading-none text-ink">
                  {c.headlineMetric.value}
                </span>
                <span className="mt-2 block font-mono text-[0.68rem] uppercase tracking-wider text-ink-3">
                  {c.headlineMetric.label}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  )
}

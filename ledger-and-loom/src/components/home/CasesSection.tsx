import { Link } from 'react-router-dom'
import { cases } from '@/data/cases'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function CasesSection() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink py-14 md:py-20">
      <div className="grid12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-7">
          <p className="label">
            <span className="text-accent">C —</span> Cases
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1] tracking-[-0.03em]">
            Three studios, three numbers that changed
          </h2>
        </div>
        <Button to="/cases" variant="text" withArrow className="col-span-12 md:col-span-3 md:col-start-10 md:justify-self-end">
          All cases
        </Button>
      </div>

      <ul className="mt-10 border-t border-ink">
        {cases.map((c, i) => (
          <li key={c.slug} className="border-b border-line">
            <Reveal delay={i * 0.05}>
              <Link to={`/cases/${c.slug}`} className="group grid12 items-baseline gap-y-4 py-8 md:py-10">
                <span className="col-span-3 font-mono text-sm text-line-strong md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-9 md:col-span-4">
                  <h3 className="text-2xl tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[1.8rem]">
                    {c.client}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
                    {c.sector}
                  </p>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-ink-2 md:col-span-4">
                  {c.oneLiner}
                </p>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <span className="block font-serif text-3xl italic text-ink md:text-4xl">
                    {c.headlineMetric.value}
                  </span>
                  <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">
                    {c.headlineMetric.label}
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

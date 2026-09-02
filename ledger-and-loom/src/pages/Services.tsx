import { Seo } from '@/components/Seo'
import { PageHead } from '@/components/layout/PageHead'
import { services } from '@/data/services'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CashflowDemo } from '@/components/CashflowDemo'

export function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Accounting, cashflow forecasting, tax planning, growth planning and studio finance — for one fixed monthly fee, agreed up front."
      />
      <PageHead
        index="01"
        kicker="Services"
        title={<>Five things,<br />one fixed fee</>}
        standfirst="A single monthly fee based on your size and how much advisory work you want. No hourly billing, no surprise invoice for a phone call."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)]">
        {services.map((s) => (
          <Reveal key={s.id} as="section">
            <div id={s.id} className="grid12 scroll-mt-24 gap-y-6 border-b border-line py-12 md:py-16">
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono text-sm text-line-strong">{s.index}</span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1] tracking-[-0.03em]">
                  {s.title}
                </h2>
                <p className="mt-4 font-serif text-lg italic text-ink-2">{s.line}</p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-sm leading-relaxed text-ink-2">{s.detail}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-2 font-mono text-[0.72rem] text-ink">
                      <span className="text-accent">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-14 md:py-20">
        <p className="label">
          <span className="text-accent">Demo —</span> Cashflow, roughly
        </p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.7rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em]">
          Not the tool we build for you, but the same idea
        </h2>
        <Reveal className="mt-10">
          <CashflowDemo />
        </Reveal>
      </section>

      <section className="page-x mx-auto flex max-w-[var(--container-page)] flex-col items-start gap-5 border-t border-ink py-14 md:flex-row md:items-center md:justify-between md:py-20">
        <h2 className="max-w-[18ch] text-2xl tracking-[-0.02em] md:text-3xl">
          Want a number for your business?
        </h2>
        <Button to="/contact" withArrow>
          Book a first conversation
        </Button>
      </section>
    </>
  )
}

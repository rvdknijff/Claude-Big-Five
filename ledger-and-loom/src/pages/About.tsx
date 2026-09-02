import { Seo } from '@/components/Seo'
import { PageHead } from '@/components/layout/PageHead'
import { site } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const team = [
  {
    initials: 'RD',
    name: 'Renske Doorn',
    role: 'Founder, advisory',
    note: 'Ten years in practice, most of it wishing the advice came before the year-end instead of after. Started Ledger & Loom to fix the order.',
  },
  {
    initials: 'YT',
    name: 'Yusuf Tan',
    role: 'Accounting & compliance',
    note: 'Runs the books, the VAT and the year-ends. Believes a clean set of accounts is a form of respect for the person who has to read them.',
  },
  {
    initials: 'ML',
    name: 'Marthe Lievens',
    role: 'Forecasting & studio finance',
    note: 'Builds the cash forecasts and the rate cards. Ex-studio manager, so she has sat on the other side of every uncomfortable conversation.',
  },
]

const beliefs = [
  'The advice should come before the decision, not after the tax bill.',
  'A number you understand beats a number you hoped for.',
  'Fixed fees, so a phone call is never a billable event.',
  'Plain language. If we cannot explain it simply, we do not understand it well enough.',
]

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Ledger & Loom is a three-person financial advice practice in Rotterdam, working only with creative businesses, on fixed monthly fees."
      />
      <PageHead
        index="04"
        kicker="About"
        title={<>A small practice,<br />on purpose</>}
        standfirst={`Three people in Rotterdam, working only with creative businesses. Founded in ${site.founded} to put the advice before the decision.`}
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
        <div className="grid12 gap-y-4">
          <p className="label col-span-12 md:col-span-2">Why</p>
          <div className="col-span-12 space-y-5 text-lg leading-relaxed text-ink-2 md:col-span-8 md:col-start-4">
            <p>
              Most accountants are set up to look backwards: they tell you what happened last
              year, file it correctly, and send an invoice. That is necessary work and we do it.
              But it is the least valuable thing we do.
            </p>
            <p>
              The valuable part is the conversation before you commit — the hire, the studio, the
              equipment, the quiet month you can see coming. Ledger &amp; Loom is built so that
              conversation happens as a matter of routine, not as a favour when you ask.
            </p>
            <p>
              We only work with creative businesses because the shape of the problem is
              consistent: irregular income, project-based work, a founder who is excellent at the
              craft and allergic to spreadsheets. We have seen it enough times to be useful
              quickly.
            </p>
          </div>
        </div>
      </section>

      {/* team — typographic, no photos */}
      <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
        <p className="label">The three of us</p>
        <ul className="mt-8 border-t border-ink">
          {team.map((m) => (
            <Reveal key={m.name} as="li">
              <div className="grid12 items-baseline gap-y-3 border-b border-line py-8">
                <span className="col-span-3 font-serif text-3xl italic text-line-strong md:col-span-2 md:text-4xl">
                  {m.initials}
                </span>
                <div className="col-span-9 md:col-span-4">
                  <h2 className="text-2xl tracking-[-0.02em]">{m.name}</h2>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
                    {m.role}
                  </p>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-ink-2 md:col-span-6">
                  {m.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-12 md:py-16">
        <p className="label">What we hold to</p>
        <ul className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
          {beliefs.map((b, i) => (
            <li key={b} className="flex gap-4 bg-page p-6 md:p-8">
              <span className="font-serif text-lg italic text-accent">
                {['i', 'ii', 'iii', 'iv'][i]}
              </span>
              <p className="text-sm leading-relaxed text-ink">{b}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button to="/contact" withArrow>
            Book a first conversation
          </Button>
        </div>
      </section>
    </>
  )
}

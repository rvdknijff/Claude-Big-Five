import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/layout/PageHeader'
import { media } from '@/data/media'
import { team, workshopFacts } from '@/data/team'
import { Figure } from '@/components/ui/Figure'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const values = [
  {
    title: 'We measure before we talk',
    body: 'No project starts with a promise of a number. It starts with a baseline pull and an honest look at the car.',
  },
  {
    title: 'Our data, not a map file',
    body: 'Calibrations are developed here, on our dyno, for your engine. We do not resell someone else’s work.',
  },
  {
    title: 'Built to last the way it is used',
    body: 'A car that sees track days is serviced like one. We would rather under-promise power and over-deliver reliability.',
  },
  {
    title: 'You get the paperwork',
    body: 'Graphs, calibration notes, setup sheets and a digital service history. The car’s story stays with the car.',
  },
]

export function Workshop() {
  return (
    <>
      <Seo
        title="Workshop"
        description="Inside Blackline Motorworks — a three-person performance workshop on the Atoomweg in Utrecht, with two lifts and a 4WD dyno cell. Meet the team behind the builds."
      />
      <PageHeader
        label="About"
        title={<>One building,<br />four marques</>}
        intro="Blackline Motorworks opened in 2016. We are deliberately small: three people, one calibration engineer signing off every car, and a workload we can actually stand behind."
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] pb-20">
        <div className="grid gap-4 md:grid-cols-12">
          <Figure asset={media.workshopWide} className="aspect-[16/10] md:col-span-8" />
          <Figure asset={media.workshopEngine} className="aspect-[4/5] md:col-span-4" />
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
          {workshopFacts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-display text-3xl font-bold tabular-nums md:text-4xl">{f.value}</dd>
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-fg-dim">
                {f.label}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-line bg-surface py-20 md:py-28">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <h2 className="label mb-10">How we work</h2>
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {values.map((v) => (
              <Reveal key={v.title} className="bg-surface p-7 md:p-9">
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-20 md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
          The people
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} as="article">
              <Figure asset={member.image} className="aspect-[4/5] w-full" />
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-signal-bright">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="page-x mx-auto flex max-w-[var(--container-page)] flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            Come and see the place
          </h2>
          <Button to="/contact" withArrow>
            Arrange a visit
          </Button>
        </div>
      </section>
    </>
  )
}

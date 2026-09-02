import { media } from '@/data/media'
import { team, workshopFacts } from '@/data/team'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

export function WorkshopIntro() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-t border-line py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="relative">
          <Reveal variant="wipe">
            <Figure asset={media.workshopWide} className="aspect-[4/3] w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <Figure
              asset={media.workshopHands}
              className="absolute -bottom-10 right-0 hidden aspect-[3/4] w-40 border-4 border-base md:block lg:w-52"
            />
          </Reveal>
        </div>

        <div className="lg:pl-6">
          <p className="label mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-signal" aria-hidden="true" />
            05 / The workshop
          </p>
          <h2 className="text-3xl leading-[1.1] sm:text-4xl">
            A small team that would rather do four marques well
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted">
            Blackline is three people and one building on the Atoomweg in Utrecht. We are not a
            franchise and we do not resell other people&rsquo;s maps. Every car is worked on by the
            person whose name is on that discipline, and every calibration is signed off by one
            engineer.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {workshopFacts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-2xl font-bold tabular-nums">{f.value}</dd>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-fg-dim">
                  {f.label}
                </p>
              </div>
            ))}
          </dl>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
            {team.map((member) => (
              <li key={member.name} className="text-sm">
                <span className="text-fg">{member.name}</span>{' '}
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-fg-dim">
                  {member.focus}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/workshop" variant="ghost" withArrow>
              Inside the workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

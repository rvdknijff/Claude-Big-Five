import { media } from '@/data/media'
import { safetyPrinciples } from '@/data/guides'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const sustainability = [
  'Trips run by train and ferry where the timetable allows; we publish the lower-carbon route to every start point.',
  'Group sizes and campsites chosen to leave established pitches no worse than we found them.',
  'A fixed share of every booking goes to the trail and access organisations in each country we visit.',
  'No helicopter drop-offs, no generators, no single-use anything on the trail.',
]

export function SafetySection() {
  return (
    <section className="bg-forest py-20 text-paper md:py-28">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <div className="rule border-paper/15 pb-6">
          <p className="label !text-paper/50">Safety</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-paper">
            Adventurous, not reckless
          </h2>
        </div>
        <div className="mt-10 grid gap-px border border-paper/12 bg-paper/12 md:grid-cols-2">
          {safetyPrinciples.map((p) => (
            <Reveal key={p.title} className="bg-forest p-7">
              <h3 className="font-display text-xl text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Sustainability() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="label">Sustainability</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
            Small groups are the quiet part of the plan
          </h2>
          <ul className="mt-8 space-y-4">
            {sustainability.map((s, i) => (
              <Reveal key={s} delay={i * 0.05} as="li">
                <div className="rule flex gap-4 border-ink/15 pt-4">
                  <span className="font-display text-sm text-ink-faint">0{i + 1}</span>
                  <p className="text-sm leading-relaxed text-ink-soft">{s}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <img
            src={media.arctic.src}
            width={media.arctic.width}
            height={media.arctic.height}
            alt={media.arctic.alt}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={media.campNight.src}
        width={media.campNight.width}
        height={media.campNight.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bark/75" />
      <div className="page-x relative mx-auto max-w-[var(--container-page)] py-24 text-paper md:py-36">
        <p className="label !text-paper/60">Next step</p>
        <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
          Tell us where you want to go
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper/80">
          Every booking starts with a conversation. We would rather turn you towards the right
          trip than sell you the wrong one.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button to="/contact" className="!bg-paper !text-bark hover:!bg-signal hover:!text-paper" withArrow>
            Start a conversation
          </Button>
          <Button
            to="/expeditions"
            variant="outline"
            className="!border-paper/30 !text-paper hover:!bg-paper hover:!text-bark"
          >
            Browse expeditions
          </Button>
        </div>
      </div>
    </section>
  )
}

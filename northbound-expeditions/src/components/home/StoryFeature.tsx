import { featuredExpedition } from '@/data/expeditions'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ScrollStory } from '@/components/expeditions/ScrollStory'

export function StoryFeature() {
  const exp = featuredExpedition
  return (
    <section className="bg-bark py-20 text-paper md:py-28">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <div className="rule border-paper/15 pb-6">
          <p className="label !text-paper/50">Field story · {exp.country}</p>
          <Reveal>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] text-paper">
              A week on the <em>{exp.name}</em>
            </h2>
          </Reveal>
          <p className="mt-4 max-w-xl text-paper/70">
            {exp.days} days, {exp.distanceKm} km, and the road behind you before lunch on day one.
          </p>
        </div>

        <div className="mt-8 [&_.label]:!text-signal [&_h3]:text-paper [&_p]:text-paper/70">
          <ScrollStory beats={exp.story} imageSide="left" />
        </div>

        <div className="rule border-paper/15 pt-8">
          <Button
            to={`/expeditions/${exp.slug}`}
            variant="outline"
            withArrow
            className="!border-paper/30 !text-paper hover:!bg-paper hover:!text-bark"
          >
            The full expedition
          </Button>
        </div>
      </div>
    </section>
  )
}

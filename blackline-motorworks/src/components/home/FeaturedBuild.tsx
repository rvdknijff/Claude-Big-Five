import { featuredProject } from '@/data/projects'
import { useCountUp } from '@/hooks/useCountUp'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { BeforeAfterSlider } from '@/components/projects/BeforeAfterSlider'

export function FeaturedBuild() {
  const p = featuredProject
  const power = useCountUp<HTMLSpanElement>({ to: p.figures.powerBuild })
  const torque = useCountUp<HTMLSpanElement>({ to: p.figures.torqueBuild })

  return (
    <section className="relative border-t border-line bg-surface py-20 md:py-32">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="label mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-signal" aria-hidden="true" />
              02 / Featured build
            </p>
            <Reveal>
              <h2 className="text-3xl leading-[1.08] sm:text-4xl">
                {p.marque} {p.model}
                <span className="mt-2 block font-mono text-sm font-medium uppercase tracking-[0.16em] text-signal-bright">
                  {p.stage}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted">{p.intro}</p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              <Stat
                refEl={power.ref}
                value={power.value}
                unit="hp"
                from={`${p.figures.powerStock} hp stock`}
              />
              <Stat
                refEl={torque.ref}
                value={torque.value}
                unit="Nm"
                from={`${p.figures.torqueStock} Nm stock`}
              />
              <Stat
                value={p.figures.sprintBuild}
                unit="0–100"
                from={`${p.figures.sprintStock} stock`}
                isText
              />
              <Stat
                value={`+${p.figures.powerBuild - p.figures.powerStock}`}
                unit="Δ hp"
                from="measured, our cell"
                isText
              />
            </div>

            <div className="mt-9">
              <Button to={`/projects/${p.slug}`} withArrow>
                Full build breakdown
              </Button>
            </div>
          </div>

          <div className="lg:pt-16">
            <BeforeAfterSlider asset={p.image} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface StatProps {
  value: number | string
  unit: string
  from: string
  isText?: boolean
  refEl?: React.Ref<HTMLSpanElement>
}

function Stat({ value, unit, from, isText, refEl }: StatProps) {
  return (
    <div className="bg-surface px-4 py-5">
      <div className="flex items-baseline gap-1.5">
        <span ref={refEl} className="font-display text-2xl font-bold tabular-nums md:text-3xl">
          {isText ? value : Math.round(value as number)}
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-fg-dim">
          {unit}
        </span>
      </div>
      <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-fg-dim">{from}</p>
    </div>
  )
}

import { useState } from 'react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

export function Expertise() {
  const [active, setActive] = useState(services[0].id)
  const activeService = services.find((s) => s.id === active) ?? services[0]

  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-t border-line py-20 md:py-32">
      <SectionHeading
        label="01 / Expertise"
        title="Seven disciplines, one set of numbers"
        intro="Tuning is not a single service. Real gains come from making small, verified changes across the whole car — and being able to prove every one of them."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
        {/* editorial index list */}
        <ol className="divide-y divide-line border-y border-line">
          {services.map((service) => {
            const isActive = service.id === active
            return (
              <li key={service.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(service.id)}
                  onFocus={() => setActive(service.id)}
                  onClick={() => setActive(service.id)}
                  aria-pressed={isActive}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors md:gap-6 md:py-7"
                >
                  <span className="font-mono text-xs text-fg-dim">{service.index}</span>
                  <span>
                    <span
                      className={`block font-display text-xl font-bold uppercase tracking-tight transition-colors md:text-2xl ${
                        isActive ? 'text-fg' : 'text-fg-muted group-hover:text-fg'
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`mt-1 block max-w-md text-sm text-fg-dim transition-[max-height,opacity] duration-300 md:overflow-hidden ${
                        isActive ? 'opacity-100 md:max-h-24' : 'opacity-70 md:max-h-0 md:opacity-0'
                      }`}
                    >
                      {service.summary}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 h-2 w-2 shrink-0 transition-colors ${
                      isActive ? 'bg-signal' : 'bg-line-bright group-hover:bg-fg-dim'
                    }`}
                  />
                </button>
              </li>
            )
          })}
        </ol>

        {/* sticky visual for the active discipline */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal variant="wipe">
            {activeService.image && (
              <Figure
                asset={activeService.image}
                className="aspect-[4/5] w-full"
                imgClassName="transition-transform duration-700"
              />
            )}
          </Reveal>
          <p className="mt-5 text-sm leading-relaxed text-fg-muted">{activeService.detail}</p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {activeService.deliverables.map((d) => (
              <li key={d} className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-dim">
                — {d}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button to="/services" variant="ghost" withArrow>
              All services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

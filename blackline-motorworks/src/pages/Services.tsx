import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/layout/PageHeader'
import { services } from '@/data/services'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

export function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Engine and ECU calibration, exhaust fabrication, suspension and chassis setup, brakes, dyno testing, track preparation and performance maintenance for Porsche, BMW M, Audi RS and Mercedes-AMG."
      />
      <PageHeader
        label="What we do"
        title={<>The work,<br />start to finish</>}
        intro="Seven disciplines. Each one begins with a measurement and ends with paperwork. You can book a single job or a full programme — the approach does not change."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-36">
        <div className="border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.id} as="article">
              <div className="grid gap-8 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-signal-bright">{service.index}</span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted">{service.detail}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg-dim"
                      >
                        <span className="text-signal">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-6">
                  {service.image && (
                    <Figure
                      asset={service.image}
                      className={
                        i % 2 === 0 ? 'aspect-[16/10] w-full' : 'ml-auto aspect-[4/3] w-full md:w-4/5'
                      }
                    />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
              Not sure where to start?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
              Most projects begin with a baseline dyno pull and an inspection. We build the plan
              from what the car actually needs.
            </p>
          </div>
          <Button to="/contact" withArrow>
            Book an inspection
          </Button>
        </div>
      </div>
    </>
  )
}

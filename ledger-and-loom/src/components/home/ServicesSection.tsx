import { Button } from '@/components/ui/Button'
import { ServiceIndex } from '@/components/ServiceIndex'

export function ServicesSection() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink py-14 md:py-20">
      <div className="grid12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-7">
          <p className="label">
            <span className="text-accent">B —</span> What we do
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1] tracking-[-0.03em]">
            Five things, one fixed fee
          </h2>
        </div>
        <Button to="/services" variant="text" withArrow className="col-span-12 md:col-span-3 md:col-start-10 md:justify-self-end">
          All services
        </Button>
      </div>

      <div className="mt-10">
        <ServiceIndex />
      </div>
    </section>
  )
}

import { media } from '@/data/media'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function InspectionCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <img
        src={media.workshopAmbient.src}
        width={media.workshopAmbient.width}
        height={media.workshopAmbient.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-base/85" />
      <div aria-hidden="true" className="bl-grid absolute inset-0 opacity-[0.35]" />

      <div className="page-x relative mx-auto max-w-[var(--container-page)] py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="label mb-6">Next step</p>
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">
              Plan an inspection
            </h2>
          </Reveal>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Bring the car in for a baseline dyno pull and a proper look over. You leave with a
            report and a plan — no obligation to book any work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/contact" withArrow>
              Request a booking
            </Button>
            <a
              href={site.phoneHref}
              className="font-mono text-sm uppercase tracking-[0.16em] text-fg transition-colors hover:text-signal-bright"
            >
              or call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

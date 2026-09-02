import { site } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink py-14 md:py-20">
      <div className="grid12 items-end gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <p className="label">Financial advice for creative businesses</p>
          <Reveal>
            <h1 className="mt-5 text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.92] tracking-[-0.035em]">
              Know your numbers.
              <span className="block font-serif italic tracking-[-0.01em] text-ink-2">
                Build what matters.
              </span>
            </h1>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="col-span-12 lg:col-span-4 lg:pb-2">
          <p className="max-w-sm text-base leading-relaxed text-ink-2">
            Financial clarity for independent creatives and growing studios. We turn the
            complicated bits into clear decisions — and hand back the headspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/services" withArrow>
              See how we help
            </Button>
            <Button to="/contact" variant="text">
              Talk to us
            </Button>
          </div>
        </Reveal>
      </div>

      <p className="mt-14 max-w-xl border-l-2 border-accent pl-4 font-serif text-xl italic leading-snug text-ink md:mt-20 md:text-2xl">
        &ldquo;{site.promise}&rdquo;
      </p>
    </section>
  )
}

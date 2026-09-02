import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'

export function ContactCTA() {
  return (
    <section className="border-t border-ink bg-ink text-page">
      <div className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="grid12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="label !text-page/50">The first step</p>
            <h2 className="mt-4 text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.03em]">
              A free 45-minute<br />conversation, no pitch
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-sm leading-relaxed text-page/70">
              You describe the business, we ask about the money, and we tell you honestly whether
              we can help — and roughly what it would cost.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to="/contact"
                withArrow
                className="!bg-page !text-ink hover:!bg-accent hover:!text-accent-ink"
              >
                Book the call
              </Button>
              <a
                href={site.emailHref}
                className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-page/70 underline-offset-4 hover:text-page hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

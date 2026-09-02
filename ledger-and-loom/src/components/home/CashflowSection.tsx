import { Reveal } from '@/components/ui/Reveal'
import { CashflowDemo } from '@/components/CashflowDemo'

export function CashflowSection() {
  return (
    <section id="demo" className="page-x mx-auto max-w-[var(--container-page)] scroll-mt-20 border-b border-ink py-14 md:py-20">
      <div className="grid12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-7">
          <p className="label">
            <span className="text-accent">A —</span> Try it
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1] tracking-[-0.03em]">
            The shape of the maths, in ten seconds
          </h2>
        </div>
        <p className="col-span-12 text-sm leading-relaxed text-ink-2 md:col-span-4 md:col-start-9">
          Move the sliders. This is the conversation we have on day one, before any of the detail
          — how much is really left, and how much of that is already the tax bill.
        </p>
      </div>

      <Reveal className="mt-10">
        <CashflowDemo />
      </Reveal>
    </section>
  )
}

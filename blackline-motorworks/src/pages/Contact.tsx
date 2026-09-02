import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/layout/PageHeader'
import { site } from '@/data/site'
import { ContactForm } from '@/components/contact/ContactForm'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Book an inspection or a baseline dyno session at Blackline Motorworks, Atoomweg 21, Utrecht. Front-end demo contact form."
      />
      <PageHeader
        label="Get in touch"
        title={<>Book an<br />inspection</>}
        intro="Tell us about the car and what you have in mind. Most projects begin with a baseline dyno pull and a look over the car — you leave with a report and a plan."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-36">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <h2 className="label mb-4">Workshop</h2>
              <address className="not-italic leading-relaxed text-fg-muted">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={site.phoneHref}
                className="mt-3 block font-mono text-sm text-fg transition-colors hover:text-signal-bright"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="mt-1 block text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h2 className="label mb-4">Opening hours</h2>
              <dl className="space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 border-b border-line pb-2">
                    <dt className="text-fg-muted">{h.day}</dt>
                    <dd className="text-right font-mono text-[0.78rem] text-fg">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* stylised location block — no external map service */}
            <div className="border border-line bg-surface">
              <div aria-hidden="true" className="bl-grid relative h-44 bg-base">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="block h-3 w-3 animate-ping rounded-full bg-signal/60" />
                  <span className="absolute inset-0 m-auto block h-2 w-2 rounded-full bg-signal" />
                </div>
                <span className="absolute bottom-2 left-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-fg-dim">
                  52.1146° N · 5.0919° E
                </span>
              </div>
              <p className="p-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-dim">
                Industrial estate Lage Weide — parking on site, unit entrance at the rear.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

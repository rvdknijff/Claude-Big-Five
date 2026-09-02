import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { site } from '@/data/site'
import { EnquiryForm } from '@/components/contact/EnquiryForm'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Start a conversation with Northbound Expeditions. Every booking begins with an email — tell us where you want to go and a guide replies within two working days."
      />
      <PageIntro
        label="Contact"
        title={<>Start a <em>conversation</em></>}
        intro="Every booking starts here, not with a checkout. Tell us which trip you have your eye on and roughly when — a guide replies within two working days, usually with a question or two."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <EnquiryForm />

          <aside className="space-y-8">
            <div>
              <h2 className="label mb-3">Direct</h2>
              <a
                href={site.emailHref}
                className="block font-display text-lg text-ink hover:text-signal"
              >
                {site.email}
              </a>
              <a href={site.phoneHref} className="mt-1 block text-sm text-ink-soft hover:text-ink">
                {site.phone}
              </a>
              <p className="mt-2 text-xs text-ink-faint">
                Office hours CET, Monday to Friday. Guides are often on a trip and off-grid — email
                is best.
              </p>
            </div>

            <div>
              <h2 className="label mb-3">Office</h2>
              <address className="not-italic leading-relaxed text-ink-soft">
                {site.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>

            <div className="border border-ink/12">
              <div className="relative h-40 bg-paper-dim" aria-hidden="true">
                <svg viewBox="0 0 300 160" className="h-full w-full">
                  <path
                    d="M0 110 40 70l30 24 40-40 45 30 50-46 45 40V160H0Z"
                    fill="var(--color-moss)"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M0 130 60 96l40 20 50-30 60 24 50-20 40 20V160H0Z"
                    fill="var(--color-forest)"
                    fillOpacity="0.35"
                  />
                  <circle cx="150" cy="66" r="5" fill="var(--color-signal)" />
                  <circle cx="150" cy="66" r="5" fill="none" stroke="var(--color-signal)" strokeWidth="1.5">
                    <animate attributeName="r" from="5" to="16" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <p className="p-3.5 text-xs leading-relaxed text-ink-faint">
                Tromsø, 69.6° N. Most trips start elsewhere — each expedition page names its own
                start point and the lower-carbon way to reach it.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { site } from '@/data/site'
import { AfspraakForm } from '@/components/contact/AfspraakForm'
import { Sprout } from '@/components/ui/decor'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact & afspraak"
        description="Neem contact op met Bloom kindertandarts in Amersfoort. Vul het formulier in of bel — we bellen binnen één werkdag terug."
      />
      <PageHero
        eyebrow="Contact"
        title="Even kennismaken?"
        intro="Laat je gegevens achter, dan bellen we binnen één werkdag terug om samen een eerste afspraak te plannen."
        tone="blush"
      />

      <section id="afspraak" className="page-x mx-auto max-w-[var(--container-page)] scroll-mt-28 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold">Aanvraag eerste bezoek</h2>
            <AfspraakForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-cream p-6">
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Sprout className="h-5 w-5 text-sage" />
                De praktijk
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-ink-soft">
                {site.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={site.phoneHref}
                className="mt-3 block font-extrabold text-ink hover:text-sage-deep"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="mt-1 block text-ink-soft hover:text-ink"
              >
                {site.email}
              </a>
            </div>

            <div className="rounded-[2rem] bg-sky-soft p-6">
              <h2 className="font-display text-xl font-semibold">Openingstijden</h2>
              <dl className="mt-3 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="border-b border-ink/10 pb-2">
                    <dt className="font-bold text-ink">{h.day}</dt>
                    <dd className="text-ink-soft">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* stylised location — no external map service */}
            <div className="overflow-hidden rounded-[2rem] bg-sage-soft">
              <div className="relative h-40 bg-sage-soft" aria-hidden="true">
                <svg viewBox="0 0 300 160" className="h-full w-full">
                  <path d="M0 120c40-10 60 10 100 4s70-30 110-24 50 30 90 24v36H0Z" fill="var(--color-sage)" opacity="0.3" />
                  <path d="M0 140c50-6 70 8 110 2s80-16 120-10 40 18 70 14v14H0Z" fill="var(--color-sage)" opacity="0.45" />
                  <circle cx="150" cy="70" r="9" fill="var(--color-blush-deep)" />
                  <circle cx="150" cy="70" r="9" fill="none" stroke="var(--color-blush-deep)" strokeWidth="2">
                    <animate attributeName="r" from="9" to="22" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <p className="p-4 text-sm leading-relaxed text-ink-soft">
                In het gezondheidscentrum aan het Sterrenkruid, wijk Vathorst. Gelijkvloerse ingang,
                kort parkeren voor de deur.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

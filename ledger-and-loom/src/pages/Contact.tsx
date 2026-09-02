import { Seo } from '@/components/Seo'
import { PageHead } from '@/components/layout/PageHead'
import { site } from '@/data/site'
import { faqs } from '@/data/faq'
import { ContactForm } from '@/components/ContactForm'
import { Accordion } from '@/components/ui/Accordion'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Book a free 45-minute conversation with Ledger & Loom in Rotterdam. No pitch — you describe the business, we tell you honestly whether we can help."
      />
      <PageHead
        index="05"
        kicker="Contact"
        title={<>Book the<br />conversation</>}
        standfirst="Free, 45 minutes, no pitch. You describe the business, we ask about the money, and we tell you honestly whether we can help and what it would cost."
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-line py-12 md:py-16">
        <div className="grid12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="label">Or directly</p>
            <a href={site.emailHref} className="mt-3 block text-lg text-ink hover:text-accent">
              {site.email}
            </a>
            <a href={site.phoneHref} className="mt-1 block text-sm text-ink-2 hover:text-ink">
              {site.phone}
            </a>
            <address className="mt-6 text-sm not-italic leading-relaxed text-ink-2">
              {site.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="mt-6 font-mono text-[0.7rem] leading-relaxed text-ink-3">
              Office in the Schiekade building, near Rotterdam Centraal. Meetings in person or on
              a call — your choice.
            </p>
          </div>
        </div>
      </section>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-12 md:py-16">
        <div className="grid12 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <p className="label">FAQs</p>
            <h2 className="mt-3 text-2xl tracking-[-0.02em]">Before you write</h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}

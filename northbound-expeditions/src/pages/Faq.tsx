import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { faqGroups } from '@/data/faq'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'

export function Faq() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers on fitness and experience, group sizes and guides, pricing and logistics, and what to expect on a Northbound expedition."
      />
      <PageIntro
        label="Questions"
        title={<>The things worth <em>asking first</em></>}
        intro="If your question is not here, email us — a real person answers, usually the guide who runs the trip you are asking about."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-32">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[1fr_2fr]">
          {faqGroups.map((group) => (
            <div key={group.title} className="lg:contents">
              <h2 className="font-display text-2xl lg:sticky lg:top-28 lg:h-fit lg:pt-4">
                {group.title}
              </h2>
              <Accordion items={group.items} />
            </div>
          ))}
        </div>

        <div className="mt-16 rule flex flex-col items-start gap-5 border-ink/20 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md font-display text-xl">
            Still not sure a trip is right for you? That is exactly the email we like to get.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={site.emailHref} withArrow>
              Email us
            </Button>
            <Button to="/contact" variant="outline">
              Contact form
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

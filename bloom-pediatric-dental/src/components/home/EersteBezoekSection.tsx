import { SectionIntro } from '@/components/ui/SectionIntro'
import { Button } from '@/components/ui/Button'
import { BezoekJourney } from './BezoekJourney'

export function EersteBezoekSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <SectionIntro
          eyebrow="Het eerste bezoek"
          title="Vijf kleine stappen, meer niet"
          body="Bij een eerste bezoek gebeurt er bewust weinig. We laten je kind wennen aan de ruimte, de mensen en de stoel — en stoppen op tijd."
        />
        <div className="mt-12">
          <BezoekJourney />
        </div>
        <div className="mt-10">
          <Button to="/eerste-bezoek" variant="sage">
            Alles over het eerste bezoek
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { GrowConcept } from '@/components/home/GrowConcept'
import { EersteBezoekSection } from '@/components/home/EersteBezoekSection'
import { NervousSection } from '@/components/home/NervousSection'
import { VoorOudersSection } from '@/components/home/VoorOudersSection'
import { TeamSection } from '@/components/home/TeamSection'
import { PipSection } from '@/components/home/PipSection'
import { AfspraakCTA } from '@/components/home/AfspraakCTA'

export function Home() {
  return (
    <>
      <Seo
        title="Kindertandarts in Amersfoort"
        description="Bloom is een kindertandartspraktijk in Amersfoort voor kinderen van 2 tot 16 jaar. Rustige eerste bezoeken, aandacht voor preventie en voor kinderen die het spannend vinden."
      />
      <Hero />
      <GrowConcept />
      <EersteBezoekSection />
      <NervousSection />
      <VoorOudersSection />
      <TeamSection />
      <PipSection />
      <AfspraakCTA />
    </>
  )
}

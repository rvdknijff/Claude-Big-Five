import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { Expertise } from '@/components/home/Expertise'
import { FeaturedBuild } from '@/components/home/FeaturedBuild'
import { SelectedProjects } from '@/components/home/SelectedProjects'
import { DynoSection } from '@/components/home/DynoSection'
import { WorkshopIntro } from '@/components/home/WorkshopIntro'
import { InspectionCTA } from '@/components/home/InspectionCTA'

export function Home() {
  return (
    <>
      <Seo
        title="Engineered to perform"
        description="Blackline Motorworks — performance engineering for Porsche, BMW M, Audi RS and Mercedes-AMG in Utrecht. Upgrades, exhaust, suspension, brakes, ECU calibration and dyno testing, every change measured."
      />
      <Hero />
      <Expertise />
      <FeaturedBuild />
      <SelectedProjects />
      <DynoSection />
      <WorkshopIntro />
      <InspectionCTA />
    </>
  )
}

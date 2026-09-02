import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { ExplorerSection } from '@/components/home/ExplorerSection'
import { StoryFeature } from '@/components/home/StoryFeature'
import { WhySmallGroups } from '@/components/home/WhySmallGroups'
import { GuidesPreview } from '@/components/home/GuidesPreview'
import { JournalPreview } from '@/components/home/JournalPreview'
import { SafetySection, Sustainability, ContactCTA } from '@/components/home/ClosingSections'

export function Home() {
  return (
    <>
      <Seo
        title="Go where the road doesn't"
        description="Northbound Expeditions runs small-group expeditions — never more than eight people — into Norway, Iceland, Scotland, Swedish Lapland and the Faroe Islands. Trekking, wild camping, sea kayaking and winter travel with qualified guides."
      />
      <Hero />
      <ExplorerSection />
      <StoryFeature />
      <WhySmallGroups />
      <GuidesPreview />
      <SafetySection />
      <JournalPreview />
      <Sustainability />
      <ContactCTA />
    </>
  )
}

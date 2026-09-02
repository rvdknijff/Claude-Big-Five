import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import {
  TickerBar,
  LineupPreview,
  VenuesPreview,
  ArtPreview,
  InfoStrip,
  ArchiveTeaser,
} from '@/components/home/HomeSections'

export function Home() {
  return (
    <>
      <Seo
        title="Rotterdam · 17—18 OCT 2026"
        description="NIGHTSHIFT is an underground electronic music and culture festival across four industrial venues in Rotterdam, 17–18 October 2026. Techno, UK garage, drum & bass, experimental live and light art."
      />
      <Hero />
      <TickerBar />
      <LineupPreview />
      <VenuesPreview />
      <ArtPreview />
      <InfoStrip />
      <ArchiveTeaser />
    </>
  )
}

import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { CashflowSection } from '@/components/home/CashflowSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { CasesSection } from '@/components/home/CasesSection'
import { PhilosophyProcess } from '@/components/home/PhilosophyProcess'
import { InsightsSection } from '@/components/home/InsightsSection'
import { ContactCTA } from '@/components/ContactCTA'

export function Home() {
  return (
    <>
      <Seo
        title="Know your numbers. Build what matters."
        description="Ledger & Loom is a financial advice practice for independent creatives and growing studios in Rotterdam — accounting, cashflow, tax planning, growth planning and studio finance, translated into clear decisions."
      />
      <Hero />
      <CashflowSection />
      <ServicesSection />
      <CasesSection />
      <PhilosophyProcess />
      <InsightsSection />
      <ContactCTA />
    </>
  )
}

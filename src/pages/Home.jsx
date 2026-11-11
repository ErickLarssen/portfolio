import { useContent, useDocumentMeta } from '../i18n/context'
import Hero from '../components/sections/Hero'
import LogoCloud from '../components/sections/LogoCloud'
import StorySection from '../components/sections/StorySection'
import CaseStudies from '../components/sections/CaseStudies'
import StatsSection from '../components/sections/StatsSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import TechStack from '../components/sections/TechStack'
import FAQSection from '../components/sections/FAQSection'
import CTASection from '../components/sections/CTASection'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  const { meta } = useContent()
  useDocumentMeta(meta.title, meta.description)

  return (
    <main id="conteudo" tabIndex={-1} className="outline-none">
      <Hero />
      <LogoCloud />
      <StorySection />
      <CaseStudies />
      <StatsSection />
      <Testimonials />
      <ServicesGrid />
      <ProcessTimeline />
      <TechStack />
      <FAQSection />
      <CTASection />
    </main>
  )
}

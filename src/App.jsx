import { MotionConfig } from 'framer-motion'

import CustomCursor from './components/ui/CustomCursor'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import LogoCloud from './components/sections/LogoCloud'
import StorySection from './components/sections/StorySection'
import CaseStudies from './components/sections/CaseStudies'
import StatsSection from './components/sections/StatsSection'
import ServicesGrid from './components/sections/ServicesGrid'
import ProcessTimeline from './components/sections/ProcessTimeline'
import TechStack from './components/sections/TechStack'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'
import Testimonials from './components/sections/Testimonials'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-ink-950 font-body text-mist-100 overflow-x-clip">
        <a href="#projetos" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-gold text-ink-950 px-4 py-2 rounded-full">
          Pular para os projetos
        </a>
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />

        <main>
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

        <Footer />
      </div>
    </MotionConfig>
  )
}

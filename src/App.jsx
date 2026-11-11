import { MotionConfig } from 'framer-motion'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useContent } from './i18n/context'

import CustomCursor from './components/ui/CustomCursor'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import ScrollManager from './components/layout/ScrollManager'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  const { ui } = useContent()

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-ink-950 font-body text-mist-100 overflow-x-clip">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-gold text-ink-950 px-4 py-2 rounded-full">
          {ui.skipToContent}
        </a>
        <ScrollManager />
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  )
}

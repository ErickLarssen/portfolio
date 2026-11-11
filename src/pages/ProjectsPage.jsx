import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useContent, useDocumentMeta } from '../i18n/context'
import ScrollReveal from '../components/ui/ScrollReveal'
import ProjectRow from '../components/projects/ProjectRow'
import CTASection from '../components/sections/CTASection'

export default function ProjectsPage() {
  const { projects, ui } = useContent()
  const { search } = useLocation()
  const t = ui.projectsPage
  useDocumentMeta(t.metaTitle, t.metaDescription)

  return (
    <main id="conteudo" tabIndex={-1} className="outline-none">
      <section className="relative bg-ink-950 pt-36 md:pt-44 pb-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-20 md:mb-28">
            <Link
              to={{ pathname: '/', search }}
              className="group inline-flex items-center gap-2 font-mono text-sm text-mist-900 hover:text-mist-100 transition-colors mb-12"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              {t.back}
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">{t.eyebrow}</p>
                <h1 className="font-display text-5xl md:text-7xl tracking-tight">
                  {t.title} <span className="italic text-gold-gradient">{t.titleAccent}</span>
                </h1>
              </div>
              <p className="text-mist-900 max-w-sm leading-relaxed">{t.intro(projects.length)}</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-28 md:gap-36">
            {projects.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

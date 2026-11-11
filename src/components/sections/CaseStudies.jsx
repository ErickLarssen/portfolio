import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useContent } from '../../i18n/context'
import ScrollReveal from '../ui/ScrollReveal'
import ProjectRow from '../projects/ProjectRow'

// Na home ficam só os projetos marcados como `featured` em content.js;
// a lista completa fica na página /projetos.
export default function CaseStudies() {
  const { projects, ui } = useContent()
  const { search } = useLocation()
  const t = ui.projects
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="bg-ink-950 py-28 md:py-36" id="projetos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">{t.eyebrow}</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              {t.title} <span className="italic text-gold-gradient">{t.titleAccent}</span>
            </h2>
          </div>
          <p className="text-mist-900 max-w-sm leading-relaxed">
            {t.intro}
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-28 md:gap-36">
          {featured.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        <ScrollReveal className="mt-24 md:mt-32 flex justify-center">
          <Link
            to={{ pathname: '/projetos', search }}
            className="group inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 rounded-full font-medium text-lg hover:bg-gold hover:text-ink-950 transition-colors"
            data-cursor="hover"
          >
            {t.all(projects.length)}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

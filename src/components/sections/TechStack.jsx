import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { GithubIcon, LinkedinIcon } from '../ui/Brand'
import { useContent } from '../../i18n/context'

export default function TechStack() {
  const { stack, profile, ui } = useContent()
  const t = ui.recruiters

  return (
    <section className="bg-ink-900 py-28 md:py-36 border-y border-white/5" id="recrutadores">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-5">
            <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">{t.eyebrow}</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-6">
              {t.title} <span className="italic">{t.titleAccent}</span>
            </h2>
            <p className="text-mist-700 leading-relaxed mb-10 max-w-md">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.resume && (
                <a href={profile.resume} download className="inline-flex items-center gap-2 bg-gold text-ink-950 font-bold px-6 py-3 rounded-full hover:shadow-[0_0_25px_rgba(214,164,79,0.35)] transition-shadow">
                  <Download size={18} /> {t.resume}
                </a>
              )}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/15 text-mist-500 hover:text-mist-100 hover:border-white/40 px-6 py-3 rounded-full transition-colors">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/15 text-mist-500 hover:text-mist-100 hover:border-white/40 px-6 py-3 rounded-full transition-colors">
                <GithubIcon size={18} /> GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light px-2 py-3 font-mono text-sm">
                {profile.email} <ArrowUpRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {t.strengths.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="border border-white/5 bg-ink-800 p-6 md:p-8">
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-mist-700 leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-24">
          <h3 className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-10">{t.stackTitle}</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {stack.map((category) => (
            <div key={category.id}>
              <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-5 border-b border-white/5 pb-4">{category.cat}</h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: '#d6a44f', color: '#09090b', borderColor: '#d6a44f' }}
                    className="font-mono text-xs md:text-sm px-4 py-2 rounded-full border border-white/10 text-mist-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

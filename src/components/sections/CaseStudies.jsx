import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { projects } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import { GithubIcon } from '../ui/Brand'
import proadesk from '../../assets/projects/proadesk.webp'
import briefing from '../../assets/projects/briefing.webp'
import previtempo from '../../assets/projects/previtempo.webp'
import cinerick from '../../assets/projects/cinerick.webp'

const images = { proadesk, briefing, previtempo, cinerick }

function TiltShot({ project }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 30 })
  const sy = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(sy, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-6deg', '6deg'])

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <div style={{ perspective: 1500 }}>
      <motion.a
        ref={ref}
        href={project.live}
        target="_blank"
        rel="noreferrer"
        onMouseMove={onMove}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative block rounded-xl overflow-hidden border border-white/10 bg-ink-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
        data-cursor="view"
        aria-label={`Abrir ${project.name} em nova aba`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
        {/* Barra de navegador */}
        <div className="relative flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-ink-900/80">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-[10px] text-mist-900 truncate">{project.live.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}</span>
        </div>
        <img
          src={images[project.image]}
          alt={`Tela do projeto ${project.name}`}
          loading="lazy"
          className="relative w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ transform: 'translateZ(20px)' }}
        />
      </motion.a>
    </div>
  )
}

function ProjectRow({ project, index }) {
  const reverse = index % 2 === 1
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <ScrollReveal className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
        <TiltShot project={project} />
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-mist-900">0{index + 1}</span>
          <span className="h-px w-8 bg-white/15" />
          <span className="font-mono text-xs text-mist-900 uppercase tracking-widest">{project.kind}</span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-2">{project.name}</h3>
        <p className="font-mono text-sm text-gold mb-6">{project.highlight}</p>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-mist-900 mb-1">O problema</dt>
            <dd className="text-mist-700 leading-relaxed">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-mist-900 mb-1">O que eu fiz</dt>
            <dd className="text-mist-500 leading-relaxed">{project.solution}</dd>
          </div>
        </dl>

        {project.engineering && (
          <ul className="space-y-2 mb-6">
            {project.engineering.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-mist-700">
                <Check size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[11px] text-mist-700 bg-ink-800 border border-white/10 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-sm">
          <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light">
            Ver projeto <ArrowUpRight size={16} />
          </a>
          <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-mist-900 hover:text-mist-100">
            <GithubIcon size={16} /> Código
          </a>
        </div>
      </ScrollReveal>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section className="bg-ink-950 py-28 md:py-36" id="projetos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">Projetos selecionados</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Provas <span className="italic text-gold-gradient">no ar.</span>
            </h2>
          </div>
          <p className="text-mist-900 max-w-sm leading-relaxed">
            Do sistema em uso numa escola pública ao projeto de paixão: cada um nasceu de um problema real.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-28 md:gap-36">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

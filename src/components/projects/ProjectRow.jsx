import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Check, Play } from 'lucide-react'
import { useContent, useLanguage } from '../../i18n/context'
import ScrollReveal from '../ui/ScrollReveal'
import { GithubIcon } from '../ui/Brand'
import proadesk from '../../assets/projects/proadesk.webp'
import briefing from '../../assets/projects/briefing.webp'
import previtempo from '../../assets/projects/previtempo.webp'
import cinerick from '../../assets/projects/cinerick.webp'

const images = { proadesk, briefing, previtempo, cinerick }

function TiltShot({ project }) {
  const { ui } = useContent()
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
        aria-label={ui.projects.open(project.name)}
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
          alt={ui.projects.screenshot(project.name)}
          loading="lazy"
          className="relative w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ transform: 'translateZ(20px)' }}
        />
      </motion.a>
    </div>
  )
}

// Vídeo do YouTube com capa própria: nada do YouTube carrega até o clique,
// e o player só entra (com som) quando o visitante pede.
// As miniaturas do YouTube vêm com faixas pretas (16:9 dentro de 4:3, ou vertical dentro
// de 16:9); object-cover no quadro do formato recorta exatamente a área do vídeo.
const VIDEO_FORMATS = {
  landscape: 'hidden md:block aspect-video',
  portrait: 'md:hidden aspect-[9/16] max-w-[360px] mx-auto',
}

function VideoShot({ project }) {
  const [playing, setPlaying] = useState(null)
  const { lang } = useLanguage()
  const t = useContent().ui.projects.video

  return Object.entries(VIDEO_FORMATS).map(([format, frame]) => {
    const { id, thumb } = project.video[format]
    const captions = lang === 'en' ? '&cc_load_policy=1' : ''
    return (
      <div
        key={format}
        className={`relative w-full rounded-xl overflow-hidden border border-white/10 bg-ink-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${frame}`}
      >
        {playing === format ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&hl=${lang}&cc_lang_pref=${lang}${captions}`}
            title={t.title(project.name)}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(format)}
            className="group absolute inset-0 w-full h-full"
            data-cursor="hover"
            aria-label={t.play(project.name)}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-ink-950/20" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gold text-ink-950 shadow-[0_0_40px_rgba(214,164,79,0.45)] transition-transform duration-300 group-hover:scale-110">
                <Play size={30} fill="currentColor" className="ml-1" />
              </span>
            </span>
            <span className="absolute left-5 bottom-4 font-mono text-[11px] uppercase tracking-widest text-mist-100/80">
              {t.label(project.video.duration)}
            </span>
          </button>
        )}
      </div>
    )
  })
}

export default function ProjectRow({ project, index }) {
  const t = useContent().ui.projects
  const reverse = index % 2 === 1
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <ScrollReveal className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
        {project.video ? <VideoShot project={project} /> : <TiltShot project={project} />}
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-mist-900">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-8 bg-white/15" />
          <span className="font-mono text-xs text-mist-900 uppercase tracking-widest">{project.kind}</span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-2">{project.name}</h3>
        <p className="font-mono text-sm text-gold mb-6">{project.highlight}</p>

        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-mist-900 mb-1">{t.problem}</dt>
            <dd className="text-mist-700 leading-relaxed">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-mist-900 mb-1">{project.team ? t.solutionTeam : t.solution}</dt>
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
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light">
              {t.view} <ArrowUpRight size={16} />
            </a>
          )}
          <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-mist-900 hover:text-mist-100">
            <GithubIcon size={16} /> {t.code}
          </a>
        </div>
      </ScrollReveal>
    </article>
  )
}

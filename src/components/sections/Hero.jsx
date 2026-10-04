import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, interpolate } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import AnimatedCounter from '../ui/AnimatedCounter'
import { EagleMark } from '../ui/Brand'
import HeroPortrait from '../ui/HeroPortrait'
import { profile, projects } from '../../data/content'

export default function Hero() {
  const containerRef = useRef(null)
  const blobRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const fade = interpolate([0, 0.8], [1, 0], { clamp: true })
  const opacity = useTransform(scrollYProgress, (v) => fade(v))
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      blobRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const lines = [
    { words: ['Transformo', 'ideias'] },
    { words: ['em', 'experiências'], stroke: true },
    { words: ['digitais', 'únicas.'], gold: true },
  ]
  let wordIndex = 0

  return (
    <section ref={containerRef} className="relative min-h-screen bg-ink-950 overflow-hidden flex flex-col justify-center pt-28 pb-24 short:pt-24 short:pb-16" id="inicio">
      {/* Fundos */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(214,164,79,0.12)_0%,transparent_65%)] pointer-events-none transition-transform duration-1000 ease-out will-change-transform z-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none z-0" />
      <HeroPortrait containerRef={containerRef} />
      <div className="grain absolute inset-0 z-[1]" />

      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
        <p className="font-mono text-xs md:text-sm text-gold uppercase tracking-[0.3em] mb-6 short:mb-4">
          {profile.name} · {profile.role}
        </p>

        <h1 className="font-tech text-[clamp(1.6rem,9.6vw,2.6rem)] md:text-[min(calc((100vw-6rem)/11.4),11vh,6.5rem)] leading-[1.08] tracking-[-0.02em] mb-10 short:mb-6 w-full [perspective:1000px]">
          {lines.map((line, li) => (
            <span key={li} className="inline md:block md:pb-1">
              {line.words.map((word) => {
                const delay = wordIndex++ * 0.08
                return (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`inline-block mr-[0.3em] ${line.stroke ? 'text-stroke' : line.gold ? 'text-gold-gradient' : 'text-mist-100'}`}
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-mist-700 text-lg md:text-xl max-w-xl mb-12 short:mb-8 short:text-lg leading-relaxed"
        >
          Sou desenvolvedor full-stack com olhar de designer. Crio sites, sistemas e lojas online que unem visual premium e código sólido, do primeiro rascunho ao deploy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          <MagneticButton
            as="a"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-gold text-ink-950 font-body font-bold px-8 py-4 short:py-3 rounded-full text-lg hover:shadow-[0_0_30px_rgba(214,164,79,0.35)] transition-shadow"
            data-cursor="hover"
          >
            Iniciar um projeto
          </MagneticButton>
          <a
            href="#recrutadores"
            className="group border border-white/20 text-mist-700 hover:text-mist-100 hover:border-white/40 hover:bg-white/5 font-body font-medium px-8 py-4 short:py-3 rounded-full text-lg transition-all inline-flex items-center gap-2"
            data-cursor="hover"
          >
            Sou recrutador
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Selo giratório com a águia */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-28 short:top-24 right-8 md:right-12 lg:right-16 w-32 h-32 short:w-28 short:h-28 hidden md:flex items-center justify-center z-10"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" aria-hidden="true">
          <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
          <text className="font-mono text-[8.4px] fill-mist-700 tracking-[0.2em] uppercase">
            <textPath href="#circlePath">Design · Código · Full-Stack · Erick Silva · </textPath>
          </text>
        </svg>
        <EagleMark className="w-12 h-12" />
      </motion.div>

      <div className="absolute bottom-8 left-6 md:left-12 z-20 hidden sm:block">
        <div className="flex flex-col gap-1 items-start">
          <span className="font-display text-3xl text-gold">
            <AnimatedCounter end={projects.length} />
          </span>
          <span className="font-mono text-xs text-mist-900 tracking-wider">projetos no ar</span>
        </div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a trajetória"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 z-20"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}

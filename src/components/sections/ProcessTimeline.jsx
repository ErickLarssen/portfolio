import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import { process } from '../../data/content'

function StepItem({ step, index }) {
  const { ref, inView } = useInView({ threshold: 0.5 })

  return (
    <div ref={ref} className="min-h-[75vh] flex items-center relative py-20">
      <div className="absolute left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div
          className="w-4 h-4 rounded-full border-2"
          animate={{
            borderColor: inView ? '#d6a44f' : 'rgba(255,255,255,0.2)',
            backgroundColor: inView ? '#d6a44f' : '#0f0f12',
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: '-20%' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pl-12 md:pl-24 relative w-full max-w-2xl"
      >
        <div className="absolute -top-14 md:-top-20 left-8 md:left-16 font-display text-[8rem] md:text-[12rem] text-white/[0.04] leading-none select-none pointer-events-none">
          0{index + 1}
        </div>
        <div className="relative z-10">
          <span className="inline-block border border-white/10 text-mist-900 bg-ink-950 font-mono text-xs px-3 py-1 rounded-full mb-6">
            {step.label}
          </span>
          <h3 className={`font-display text-4xl md:text-6xl mb-4 tracking-tight transition-colors duration-500 ${inView ? 'text-mist-100' : 'text-mist-900'}`}>
            {step.title}
          </h3>
          <p className={`font-display italic text-xl md:text-2xl mb-6 transition-colors duration-500 ${inView ? 'text-gold' : 'text-mist-900'}`}>
            {step.tagline}
          </p>
          <p className="text-mist-700 text-base md:text-lg leading-relaxed max-w-lg">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end end'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="bg-ink-950 relative" id="processo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-8">
        <ScrollReveal>
          <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">Como funciona</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Da ideia ao ar, <span className="italic">sem mistério.</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative w-full flex">
        <div className="w-px bg-white/5 absolute top-0 bottom-0 left-6 md:left-12" />
        <div className="sticky top-0 h-screen w-px flex-shrink-0 z-0">
          <motion.div
            className="absolute top-0 w-[3px] -ml-[1px] h-screen bg-gradient-to-b from-gold/10 via-gold to-gold/10 origin-top shadow-[0_0_15px_rgba(214,164,79,0.5)]"
            style={{ scaleY }}
          />
        </div>
        <div className="flex-1 pb-24">
          {process.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

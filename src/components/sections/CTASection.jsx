import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { EagleMark, WhatsappIcon } from '../ui/Brand'
import { profile } from '../../data/content'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

export default function CTASection() {
  return (
    <section className="relative min-h-screen bg-ink-950 flex flex-col justify-center items-center overflow-hidden py-32" id="contato">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-900 to-ink-950 opacity-60" />
      <div className="grain absolute inset-0 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(214,164,79,0.09),transparent)] rounded-full pointer-events-none" />
      <motion.div
        animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(214,164,79,0.07)_0%,transparent_70%)] pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 100, 0], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-40 right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(240,137,42,0.07)_0%,transparent_70%)] pointer-events-none will-change-transform"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div {...reveal()} className="mb-10">
          <EagleMark className="w-20 h-20" title="" />
        </motion.div>

        <motion.p {...reveal()} className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-8">
          Vamos conversar?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl md:text-[7.5rem] lg:text-[9rem] tracking-tighter leading-[0.9] mb-12 flex flex-col"
        >
          <span className="text-mist-100">Tire sua ideia</span>
          <span className="text-stroke-gold italic">do papel.</span>
        </motion.h2>

        <motion.p {...reveal(0.2)} className="text-mist-500 text-xl md:text-2xl mb-14 max-w-xl">
          Me conte o que você precisa. Respondo pessoalmente, normalmente no mesmo dia.
        </motion.p>

        <motion.div {...reveal(0.3)} className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton
            as="a"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="gap-3 px-10 py-5 text-lg md:text-xl font-bold bg-gold text-ink-950 rounded-full hover:shadow-[0_0_40px_rgba(214,164,79,0.4)] transition-shadow"
          >
            <WhatsappIcon size={22} /> Chamar no WhatsApp
          </MagneticButton>
          <a
            href={profile.briefing}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-white/20 text-mist-500 hover:text-mist-100 hover:border-white/40 px-8 py-5 rounded-full text-lg transition-colors"
          >
            Preencher o briefing
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.a
          {...reveal(0.4)}
          href={`mailto:${profile.email}`}
          className="font-mono text-sm text-mist-700 hover:text-mist-100 transition-colors pb-1 border-b border-white/20 hover:border-white mt-12"
        >
          ou escreva para {profile.email}
        </motion.a>
      </div>
    </section>
  )
}

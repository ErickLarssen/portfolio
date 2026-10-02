import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { EagleMark, GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/Brand'
import { profile } from '../../data/content'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Recrutadores', href: '#recrutadores' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 80))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/80 border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-3 z-50" aria-label="Erick Silva, início">
            <EagleMark className="w-9 h-9" title="" />
            <span className="font-body text-sm font-bold tracking-[0.25em] uppercase text-mist-100">Erick Silva</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-mist-900 hover:text-mist-100 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-ink-950 transition-colors"
            >
              Pedir orçamento
            </MagneticButton>
          </div>

          <button
            className="lg:hidden z-50 text-mist-100 p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900 z-40 flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-5 mt-10" aria-label="Menu">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-5xl text-mist-100 hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-6 flex gap-6 text-mist-900"
            >
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-mist-100" aria-label="WhatsApp"><WhatsappIcon size={24} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-mist-100" aria-label="LinkedIn"><LinkedinIcon size={24} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-mist-100" aria-label="GitHub"><GithubIcon size={24} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

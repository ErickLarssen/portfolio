import { motion } from 'framer-motion'
import { Globe, LayoutDashboard, ShoppingBag, PenTool, ArrowUpRight } from 'lucide-react'
import { services, profile } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const icons = { Globe, LayoutDashboard, ShoppingBag, PenTool }

export default function ServicesGrid() {
  return (
    <section className="bg-ink-900 py-28 md:py-36 relative" id="servicos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">Soluções digitais para todos</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              O que posso <br className="hidden md:block" />
              <span className="italic">fazer por você.</span>
            </h2>
          </div>
          <p className="text-mist-900 md:max-w-md md:justify-self-end leading-relaxed">
            Para empresas, autônomos e projetos pessoais. Você não precisa entender de tecnologia: eu cuido da parte técnica e explico tudo pelo caminho.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-ink-800 border border-white/5 p-8 md:p-10 min-h-[300px] relative overflow-hidden group hover:border-gold/40 transition-colors duration-500 flex flex-col"
              >
                <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex justify-between items-start mb-10">
                  <span className="font-mono text-xs text-mist-900">0{i + 1}</span>
                  <Icon size={30} strokeWidth={1.4} className="text-gold/70 group-hover:text-gold group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="relative font-display text-3xl lg:text-4xl mb-3 tracking-tight">{service.title}</h3>
                <p className="relative text-mist-700 leading-relaxed max-w-md mb-8">{service.desc}</p>
                <div className="relative flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-mist-700 bg-ink-900 border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-sm text-gold hover:text-gold-light">
            Conte sua ideia e receba uma proposta
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

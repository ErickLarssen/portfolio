import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/content'

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-28 w-full text-ink-950 bg-gradient-to-r from-gold-dim via-gold to-gold-light overflow-hidden" aria-label="Números">
      <div className="grain absolute inset-0 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} className="flex flex-col">
            <div className="font-display text-6xl md:text-8xl tracking-tighter tabular-nums leading-none">
              <AnimatedCounter end={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest mt-4 opacity-80 font-medium max-w-[16ch]">
              {stat.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

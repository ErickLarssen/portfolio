import MarqueeText from '../ui/MarqueeText'
import { useContent } from '../../i18n/context'

export default function LogoCloud() {
  const { marquee, ui } = useContent()
  const row = (items) =>
    items.map((name) => (
      <span key={name} className="font-display text-3xl md:text-5xl text-white/20 hover:text-gold/80 transition-colors duration-300">
        {name}
      </span>
    ))

  return (
    <section className="bg-ink-900 py-20 md:py-24 border-y border-white/5 relative overflow-hidden group" aria-label={ui.logos.label}>
      <p className="text-center font-mono text-xs text-mist-900 uppercase tracking-widest mb-12 px-6">
        {ui.logos.title}
      </p>
      <div className="flex flex-col gap-10 sm:group-hover:[&>div>div]:[animation-play-state:paused]" aria-hidden="true">
        <MarqueeText items={row(marquee)} />
        <MarqueeText items={row([...marquee].reverse())} direction="reverse" />
      </div>
      <p className="sr-only">{marquee.join(', ')}</p>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none" />
    </section>
  )
}

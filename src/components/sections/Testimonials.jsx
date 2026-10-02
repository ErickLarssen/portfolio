import { useState } from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

// Avatar em pixels gerado a partir do nome (sempre o mesmo desenho para o mesmo nome).
// Grade 5x5 espelhada, no estilo dos identicons, em dourado sobre grafite.
function PixelAvatar({ seed }) {
    let hash = 0
    for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0

    const cells = []
    for (let row = 0; row < 5; row++) {
        const half = []
        for (let col = 0; col < 3; col++) half.push((hash >> (row * 3 + col)) & 1)
        cells.push(...half, half[1], half[0])
    }

    return (
        <div className="w-full max-w-[200px] aspect-square grid grid-cols-5 grid-rows-5 mb-6 rounded-sm overflow-hidden border border-white/5" aria-hidden="true">
            {cells.map((on, i) => (
                <div key={i} className={on ? 'bg-gradient-to-br from-gold-dim to-gold-light' : 'bg-ink-700'} />
            ))}
        </div>
    )
}

function TestimonialCard({ item }) {
    const [flipped, setFlipped] = useState(false)
    const toggle = () => setFlipped((f) => !f)

    return (
        <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label={`Depoimento de ${item.name}. Ative para ${flipped ? 'voltar' : 'ler'}.`}
            // No mouse o hover já vira o card; o clique só vira em telas de toque.
            onClick={() => !window.matchMedia('(hover: hover)').matches && toggle()}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle()
                }
            }}
            className="group h-[400px] w-full [perspective:1000px] cursor-pointer rounded-sm"
        >
            <div
                className={`relative h-full w-full transition-transform duration-700 motion-reduce:duration-0 [transform-style:preserve-3d]
            [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]
            ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
                {/* Frente: quem falou */}
                <div className="absolute inset-0 bg-ink-800 border border-white/5 p-6 md:p-8 flex flex-col [backface-visibility:hidden]">
                    <PixelAvatar seed={item.name} />
                    <h3 className="font-display text-2xl leading-tight">{item.name}</h3>
                    <p className="font-mono text-sm text-gold mt-1">{item.role}</p>
                    {item.project && (
                        <p className="font-mono text-[11px] text-mist-900 uppercase tracking-widest mt-auto pt-4">
                            Projeto · {item.project}
                        </p>
                    )}
                </div>

                {/* Verso: o que escreveu */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-dim via-gold to-gold-light p-6 md:p-8 flex flex-col text-ink-950 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Quote size={28} className="opacity-40 mb-4 shrink-0" />
                    <blockquote className="font-display italic text-lg lg:text-xl leading-snug overflow-y-auto">
                        {item.quote}
                    </blockquote>
                    <p className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest opacity-80">
                        {item.name} · {item.role}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    // Sem depoimentos cadastrados, a seção simplesmente não aparece.
    if (!testimonials.length) return null

    return (
        <section className="bg-ink-950 py-28 md:py-36" id="depoimentos">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ScrollReveal className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">Depoimentos</p>
                        <h2 className="font-display text-5xl md:text-7xl tracking-tight">
                            Quem já <span className="italic">trabalhou comigo.</span>
                        </h2>
                    </div>
                    <p className="font-mono text-xs text-mist-900 md:text-right">
                        <span className="hidden [@media(hover:hover)]:inline">Passe o mouse</span>
                        <span className="[@media(hover:hover)]:hidden">Toque</span> em um card para ler.
                    </p>
                </ScrollReveal>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {testimonials.map((item, i) => (
                        <ScrollReveal
                            key={item.name}
                            delay={i * 0.1}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <TestimonialCard item={item} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
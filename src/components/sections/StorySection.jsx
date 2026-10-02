import { useId, useRef } from 'react'
import { motion, useScroll, useTransform, interpolate } from 'framer-motion'
import { eagles } from '../../data/eagles'
import { story } from '../../data/content'

// Trajetória: a águia coroada se redesenha a cada fase da marca.
// O progresso da rolagem dentro da seção controla tudo:
// cada fase ocupa 1/3 da seção (desenha o contorno, preenche, segura, sai).

const STAGES = [
  { key: 'design', fills: ['#1e2d53'], plate: 'rgba(217, 38, 57, 1)', fade: true },
  { key: 'code', fills: ['#e32f29', '#f5f5f8', '#f5f5f8'], plate: 'rgba(12, 27, 45, 1)' },
  { key: 'erick', fills: ['gold'], plate: 'rgba(22, 22, 26, 0)' },
]

const SEG = 1 / STAGES.length

// Interpolação calculada em JS a cada quadro. Evita a aceleração nativa do
// framer-motion para opacidade em scroll, que ficava travada em alguns navegadores.
function useRange(progress, input, output) {
  const map = interpolate(input, output, { clamp: true })
  return useTransform(progress, (v) => map(v))
}

function DrawPath({ d, progress, range, stroke, fill, strokeWidth }) {
  const offset = useTransform(progress, range, [1, 0])
  return (
    <motion.path
      d={d}
      pathLength={1}
      strokeDasharray="1 1"
      style={{ strokeDashoffset: offset }}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  )
}

function EagleLayer({ stage, index, progress }) {
  const uid = useId()
  const { viewBox, paths } = eagles[stage.key]
  const size = Number(viewBox.split(' ')[2])
  const start = index * SEG
  const end = start + SEG
  const isLast = index === STAGES.length - 1
  const isFirst = index === 0

  const drawEnd = start + SEG * 0.42
  const fill = useRange(progress, [start + SEG * 0.3, start + SEG * 0.55], [0, 1])
  const opacity = useRange(
    progress,
    isFirst ? [end - SEG * 0.15, end] : isLast ? [start - 0.001, start] : [start - 0.001, start, end - SEG * 0.15, end],
    isFirst ? [1, 0] : isLast ? [0, 1] : [0, 1, 1, 0],
  )
  const scale = useTransform(progress, [start, end], [0.94, 1.04])
  const blur = useTransform(progress, [Math.min(end - SEG * 0.15, 0.99), Math.min(end, 1)], isLast ? ['blur(0px)', 'blur(0px)'] : ['blur(0px)', 'blur(8px)'])

  const gradientId = `gold-${uid}`
  const maskId = `fade-${uid}`
  const colorFor = (i) => {
    const c = stage.fills[i] ?? stage.fills[stage.fills.length - 1]
    return c === 'gold' ? `url(#${gradientId})` : c
  }

  return (
    <motion.svg
      viewBox={viewBox}
      className="absolute inset-[12%] w-[76%] h-[76%] overflow-visible"
      style={{ opacity, scale, filter: blur }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor="#b8862f" />
          <stop offset="1" stopColor="#e2b062" />
        </linearGradient>
        {stage.fade && (
          <linearGradient id={`${maskId}-g`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0.55" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
        )}
        {stage.fade && (
          <mask id={maskId} maskUnits="userSpaceOnUse" x={viewBox.split(' ')[0]} y={viewBox.split(' ')[1]} width={size} height={size}>
            <rect x={viewBox.split(' ')[0]} y={viewBox.split(' ')[1]} width={size} height={size} fill={`url(#${maskId}-g)`} />
          </mask>
        )}
      </defs>
      <motion.g style={{ fillOpacity: fill }} mask={stage.fade ? `url(#${maskId})` : undefined}>
        {paths.map((d, i) => {
          const stagger = (i / paths.length) * SEG * 0.18
          const color = colorFor(i)
          return (
            <DrawPath
              key={i}
              d={d}
              progress={progress}
              range={[start + stagger, drawEnd + stagger * 0.5]}
              stroke={color}
              fill={color}
              strokeWidth={size / 300}
            />
          )
        })}
      </motion.g>
    </motion.svg>
  )
}

function Chapter({ chapter, index, progress }) {
  const start = index * SEG
  const end = start + SEG
  const isFirst = index === 0
  const isLast = index === story.length - 1
  // Os intervalos precisam ficar entre 0 e 1 e em ordem crescente
  // (o framer-motion os converte em animações nativas do navegador).
  const opacity = useRange(
    progress,
    isFirst
      ? [0, end - SEG * 0.18, end - SEG * 0.02]
      : isLast
        ? [start + SEG * 0.05, start + SEG * 0.22, 1]
        : [start + SEG * 0.05, start + SEG * 0.22, end - SEG * 0.18, end - SEG * 0.02],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  )
  const y = useTransform(progress, [start, start + SEG * 0.22, end - SEG * 0.18, end], [isFirst ? 0 : 40, 0, 0, isLast ? 0 : -40])

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center" aria-hidden={false}>
      <p className="font-mono text-xs text-gold uppercase tracking-widest mb-5">{chapter.eyebrow}</p>
      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 text-balance">{chapter.title}</h3>
      <p className="text-mist-700 text-base md:text-lg leading-relaxed max-w-md">{chapter.text}</p>
    </motion.div>
  )
}

function RailItem({ index, progress, label }) {
  const start = index * SEG
  const width = useTransform(progress, [start, start + SEG], ['0%', '100%'])
  return (
    <div className="flex-1">
      <div className="h-px bg-white/10 relative overflow-hidden mb-3">
        <motion.div className="absolute inset-y-0 left-0 bg-gold" style={{ width }} />
      </div>
      <p className="font-mono text-[10px] md:text-xs text-mist-900 uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function StorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const plate = useTransform(
    scrollYProgress,
    [0, SEG * 0.85, SEG, SEG * 1.85, SEG * 2, 1],
    [STAGES[0].plate, STAGES[0].plate, STAGES[1].plate, STAGES[1].plate, STAGES[2].plate, STAGES[2].plate],
  )
  const plateBorder = useTransform(scrollYProgress, [SEG * 1.85, SEG * 2], ['rgba(255,255,255,0.08)', 'rgba(214,164,79,0.0)'])
  const glow = useRange(scrollYProgress, [SEG * 1.9, SEG * 2.3], [0, 1])

  return (
    <section ref={ref} className="relative bg-ink-950 h-[360vh]" id="sobre" aria-label="Minha trajetória">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 pt-24 pb-10 flex flex-col">
          <p className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-6 md:mb-0">A trajetória · uma águia, três fases</p>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center min-h-0">
            {/* Palco da águia */}
            <div className="relative mx-auto w-[min(64vw,36vh)] md:w-[min(40vw,62vh)] aspect-square md:order-2">
              <motion.div
                className="absolute inset-0 rounded-[28px] border"
                style={{ backgroundColor: plate, borderColor: plateBorder }}
              />
              <motion.div
                className="absolute -inset-[15%] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(214,164,79,0.18),transparent_65%)]"
                style={{ opacity: glow }}
              />
              {STAGES.map((stage, i) => (
                <EagleLayer key={stage.key} stage={stage} index={i} progress={scrollYProgress} />
              ))}
            </div>

            {/* Capítulos */}
            <div className="relative h-[34vh] md:h-[52vh] md:order-1">
              {story.map((chapter, i) => (
                <Chapter key={chapter.key} chapter={chapter} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 mt-4">
            {story.map((c, i) => (
              <RailItem key={c.key} index={i} progress={scrollYProgress} label={c.eyebrow.split('·').pop().trim()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

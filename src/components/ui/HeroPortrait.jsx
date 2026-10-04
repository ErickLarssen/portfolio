import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import portrait from '../../assets/erick-silva.webp'

// Retrato em preto e branco no fundo da abertura.
// Fica apagado; sob o cursor, uma "lente" revela a foto nítida com um leve tom dourado.
// Em telas de toque (sem cursor) aparece só a versão suave, sem holofote.
//
// Desempenho: a lente é um círculo de tamanho fixo que apenas se MOVE (transform).
// A foto dentro dela se move no sentido contrário, ficando alinhada com a de baixo.
// Assim nada é redesenhado a cada quadro, só reposicionado pela placa de vídeo.
const hasFinePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

const LENS = 560 // diâmetro do holofote, em px

// Esmaece a foto para a esquerda (onde fica o título) e para baixo.
const edgeFade =
  'linear-gradient(to right, transparent 0%, black 45%), linear-gradient(to top, transparent 0%, black 22%)'
const lensMask = 'radial-gradient(circle, black 0%, black 30%, transparent 70%)'

export default function HeroPortrait({ containerRef }) {
  const wrapRef = useRef(null)
  const [spotlight] = useState(hasFinePointer)
  const [size, setSize] = useState({ w: 0, h: 0 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 120, damping: 20 })
  const y = useSpring(my, { stiffness: 120, damping: 20 })
  const lensOpacity = useSpring(0, { stiffness: 90, damping: 18 })

  const lensX = useTransform(x, (v) => v - LENS / 2)
  const lensY = useTransform(y, (v) => v - LENS / 2)
  const innerX = useTransform(x, (v) => LENS / 2 - v)
  const innerY = useTransform(y, (v) => LENS / 2 - v)

  // Tamanho da área da foto (a imagem dentro da lente precisa ter o mesmo tamanho).
  useEffect(() => {
    if (!spotlight || !wrapRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: width, h: height })
    })
    ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [spotlight])

  useEffect(() => {
    if (!spotlight) return
    const area = containerRef.current
    if (!area) return

    const onMove = (e) => {
      const r = wrapRef.current.getBoundingClientRect()
      mx.set(e.clientX - r.left)
      my.set(e.clientY - r.top)
      lensOpacity.set(1)
    }
    const onLeave = () => lensOpacity.set(0)

    area.addEventListener('mousemove', onMove, { passive: true })
    area.addEventListener('mouseleave', onLeave)
    return () => {
      area.removeEventListener('mousemove', onMove)
      area.removeEventListener('mouseleave', onLeave)
    }
  }, [spotlight, containerRef, mx, my, lensOpacity])

  const imgClass = 'object-cover object-[50%_70%] select-none'

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      className="absolute inset-y-0 right-0 w-[95vw] sm:w-[70vw] lg:w-[46vw] max-w-[760px] overflow-hidden pointer-events-none"
      style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade, WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }}
    >
      {/* Camada base: apagada */}
      <img
        src={portrait}
        alt="Erick Silva"
        draggable="false"
        decoding="async"
        className={`absolute inset-0 w-full h-full ${imgClass} opacity-[0.16] sm:opacity-[0.22] lg:opacity-[0.32] grayscale`}
      />

      {/* Lente revelada pelo cursor */}
      {spotlight && size.w > 0 && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-0 rounded-full overflow-hidden will-change-transform"
          style={{
            width: LENS,
            height: LENS,
            x: lensX,
            y: lensY,
            opacity: lensOpacity,
            WebkitMaskImage: lensMask,
            maskImage: lensMask,
          }}
        >
          <motion.img
            src={portrait}
            alt=""
            draggable="false"
            className={`absolute left-0 top-0 max-w-none ${imgClass} [filter:sepia(0.35)_saturate(1.3)_brightness(1.15)] will-change-transform`}
            style={{ width: size.w, height: size.h, x: innerX, y: innerY }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

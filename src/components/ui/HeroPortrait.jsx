import { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import portrait from '../../assets/erick-silva.webp'

// Retrato em preto e branco no fundo da abertura.
// Fica apagado; sob o cursor, um holofote revela a foto nítida com um leve tom dourado.
// Em telas de toque (sem cursor) aparece só a versão suave, sem holofote.
const hasFinePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

// Esmaece a foto para a esquerda (onde fica o título) e para baixo.
const edgeFade =
  'linear-gradient(to right, transparent 0%, black 45%), linear-gradient(to top, transparent 0%, black 22%)'

export default function HeroPortrait({ containerRef }) {
  const wrapRef = useRef(null)
  const [spotlight] = useState(hasFinePointer)

  const mx = useMotionValue(-999)
  const my = useMotionValue(-999)
  const x = useSpring(mx, { stiffness: 120, damping: 20 })
  const y = useSpring(my, { stiffness: 120, damping: 20 })
  const radius = useSpring(0, { stiffness: 90, damping: 18 })
  const spotMask = useMotionTemplate`radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 35%, transparent 100%)`

  useEffect(() => {
    if (!spotlight) return
    const area = containerRef.current
    if (!area) return

    const onMove = (e) => {
      const r = wrapRef.current.getBoundingClientRect()
      mx.set(e.clientX - r.left)
      my.set(e.clientY - r.top)
      radius.set(280)
    }
    const onLeave = () => radius.set(0)

    area.addEventListener('mousemove', onMove)
    area.addEventListener('mouseleave', onLeave)
    return () => {
      area.removeEventListener('mousemove', onMove)
      area.removeEventListener('mouseleave', onLeave)
    }
  }, [spotlight, containerRef, mx, my, radius])

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      className="absolute inset-y-0 right-0 w-[95vw] sm:w-[70vw] lg:w-[46vw] max-w-[760px] pointer-events-none select-none"
      style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade, WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }}
    >
      {/* Camada base: apagada */}
      <img
        src={portrait}
        alt="Erick Silva"
        draggable="false"
        className="absolute inset-0 w-full h-full object-cover object-[50%_70%] opacity-[0.16] sm:opacity-[0.22] lg:opacity-[0.32] grayscale"
      />

      {/* Camada revelada pelo holofote do cursor */}
      {spotlight && (
        <motion.img
          src={portrait}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-[50%_70%] grayscale-0 [filter:sepia(0.35)_saturate(1.3)_brightness(1.15)]"
          style={{ WebkitMaskImage: spotMask, maskImage: spotMask }}
        />
      )}
    </motion.div>
  )
}

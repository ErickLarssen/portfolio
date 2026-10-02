import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

// Cursor personalizado. Só é ativado em dispositivos com mouse e quando o
// usuário não pediu movimento reduzido; nos demais casos o cursor nativo fica.
const canUseCustomCursor = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function CustomCursor() {
  const [enabled] = useState(canUseCustomCursor)
  const [cursorState, setCursorState] = useState('default')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const trailX = useSpring(mouseX, { stiffness: 150, damping: 25 })
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 25 })
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')

    const onMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const onOver = (e) => {
      const el = e.target.closest('[data-cursor], a, button')
      setCursorState(el ? el.getAttribute('data-cursor') || 'hover' : 'default')
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  const variants = {
    default: { width: 12, height: 12, borderRadius: '50%', backgroundColor: '#f4f2ee', border: '0px solid transparent' },
    hover: { width: 48, height: 48, borderRadius: '50%', backgroundColor: '#f4f2ee', border: '0px solid transparent' },
    text: { width: 4, height: 24, borderRadius: '2px', backgroundColor: '#f4f2ee', border: '0px solid transparent' },
    view: { width: 76, height: 76, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid #f4f2ee' },
  }

  return (
    <>
      <motion.div aria-hidden="true" className="fixed top-0 left-0 z-[9999] pointer-events-none" style={{ x: springX, y: springY, mixBlendMode: 'difference' }}>
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-mono text-[10px] tracking-widest font-bold overflow-hidden"
          variants={variants}
          animate={cursorState}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {cursorState === 'view' && <span className="text-mist-100">ABRIR</span>}
        </motion.div>
      </motion.div>
      <motion.div aria-hidden="true" className="fixed top-0 left-0 z-[9998] pointer-events-none" style={{ x: trailX, y: trailY, mixBlendMode: 'difference' }}>
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-mist-100 w-8 h-8"
          animate={{ opacity: cursorState === 'default' ? 0.35 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  )
}

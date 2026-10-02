import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Botão (ou link, com as="a") que é "atraído" pelo cursor.
export default function MagneticButton({ children, className, as = 'button', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35)
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35)
  }

  const Comp = as === 'a' ? motion.a : motion.button

  return (
    <Comp
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className={`inline-flex items-center justify-center ${className ?? ''}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

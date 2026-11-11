import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Rolagem entre páginas: ao trocar de página, começa do topo (ou vai direto à
// âncora, ex.: /#sobre vindo de /projetos); na mesma página, rola suave até a âncora.
export default function ScrollManager() {
  const { pathname, hash, key, state } = useLocation()
  const lastPath = useRef(null)
  const keepScroll = state?.keepScroll

  useEffect(() => {
    const changedPage = lastPath.current !== pathname
    lastPath.current = pathname
    // Troca de idioma atualiza ?lang= sem mover a página.
    if (keepScroll && !changedPage) return
    // O CSS usa scroll-behavior: smooth; ao trocar de página o salto precisa ser imediato.
    const behavior = changedPage ? 'instant' : 'smooth'

    if (!hash) {
      if (changedPage) window.scrollTo({ top: 0, behavior })
      return
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key, keepScroll])

  return null
}

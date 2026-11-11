import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { content, languages } from '../data/content'
import { LanguageContext } from './context'

const STORAGE_KEY = 'lang'

// Ordem de prioridade: ?lang= na URL, escolha salva, idioma do navegador.
// Visitantes com navegador em português veem PT; os demais, EN.
function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (languages.includes(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (languages.includes(saved)) return saved
  } catch { /* armazenamento indisponível */ }
  return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const location = useLocation()
  const navigate = useNavigate()

  // Título e descrição ficam a cargo de cada página (useDocumentMeta).
  useEffect(() => {
    document.documentElement.lang = content[lang].meta.htmlLang
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang: (next) => {
      setLangState(next)
      try { localStorage.setItem(STORAGE_KEY, next) } catch { /* ignora */ }
      // Mantém um link com ?lang= coerente com a escolha atual, pelo roteador,
      // para os links internos herdarem o idioma certo. keepScroll evita rolar até a âncora.
      const params = new URLSearchParams(location.search)
      if (params.has('lang')) {
        params.set('lang', next)
        navigate({ ...location, search: `?${params}` }, { replace: true, state: { keepScroll: true } })
      }
    },
  }), [lang, location, navigate])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

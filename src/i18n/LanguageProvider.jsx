import { useEffect, useMemo, useState } from 'react'
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

function persist(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignora */ }
  // Mantém um link com ?lang= coerente com a escolha atual.
  const url = new URL(window.location.href)
  if (url.searchParams.has('lang')) {
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  useEffect(() => {
    const { meta } = content[lang]
    document.documentElement.lang = meta.htmlLang
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang: (next) => {
      setLangState(next)
      persist(next)
    },
  }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

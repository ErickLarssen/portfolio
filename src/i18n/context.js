import { createContext, useContext, useEffect } from 'react'
import { content } from '../data/content'

export const LanguageContext = createContext({ lang: 'pt', setLang: () => {} })

export const useLanguage = () => useContext(LanguageContext)

// Conteúdo completo (textos + dados fixos) no idioma atual.
export const useContent = () => content[useLanguage().lang]

// Título da aba e meta description de cada página, no idioma atual.
export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

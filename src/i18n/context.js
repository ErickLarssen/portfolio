import { createContext, useContext } from 'react'
import { content } from '../data/content'

export const LanguageContext = createContext({ lang: 'pt', setLang: () => {} })

export const useLanguage = () => useContext(LanguageContext)

// Conteúdo completo (textos + dados fixos) no idioma atual.
export const useContent = () => content[useLanguage().lang]

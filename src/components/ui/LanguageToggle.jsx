import { useContent, useLanguage } from '../../i18n/context'

const options = [
  { code: 'pt', short: 'PT', name: 'Português' },
  { code: 'en', short: 'EN', name: 'English' },
]

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()
  const { ui } = useContent()

  return (
    <div role="group" aria-label={ui.language} className={`flex items-center rounded-full border border-white/15 p-0.5 font-mono text-xs ${className}`}>
      {options.map((o) => {
        const active = o.code === lang
        return (
          <button
            key={o.code}
            type="button"
            lang={o.code}
            aria-label={o.name}
            aria-pressed={active}
            onClick={() => !active && setLang(o.code)}
            className={`px-2.5 py-1 rounded-full tracking-widest transition-colors ${active ? 'bg-gold text-ink-950' : 'text-mist-900 hover:text-mist-100'}`}
          >
            {o.short}
          </button>
        )
      })}
    </div>
  )
}

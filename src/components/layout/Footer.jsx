import { EagleMark, GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/Brand'
import { useContent } from '../../i18n/context'

const links = ['sobre', 'servicos', 'processo', 'recrutadores', 'duvidas']

export default function Footer() {
  const year = new Date().getFullYear()
  const { profile, projects, ui } = useContent()
  const t = ui.footer

  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3 mb-6">
              <EagleMark className="w-10 h-10" title="" />
              <span className="font-body text-sm font-bold tracking-[0.25em] uppercase">Erick Silva</span>
            </a>
            <p className="text-mist-900 text-sm mb-6 leading-relaxed max-w-xs">
              {profile.role}. {profile.tagline}
            </p>
            <div className="flex gap-2 text-mist-900">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-mist-100 p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors"><WhatsappIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-mist-100 p-2 rounded-full hover:bg-white/5 transition-colors"><LinkedinIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-mist-100 p-2 rounded-full hover:bg-white/5 transition-colors"><GithubIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">{t.nav}</h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              {links.map((id) => (
                <li key={id}><a href={`#${id}`} className="hover:text-mist-100 transition-colors">{t.links[id]}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">{t.projects}</h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              {projects.map((p) => (
                <li key={p.id}>
                  <a href={p.live} target="_blank" rel="noreferrer" className="hover:text-mist-100 transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">{t.contact}</h4>
            <div className="flex flex-col gap-3 text-sm text-mist-500">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-mist-100 transition-colors">{profile.phoneDisplay}</a>
              <a href={`mailto:${profile.email}`} className="hover:text-mist-100 transition-colors break-all">{profile.email}</a>
              <span className="text-mist-900">{profile.site}</span>
              <span className="text-mist-900">{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <p>© {year} Erick Silva. {t.rights}</p>
          <p>{t.signature}</p>
        </div>
      </div>
    </footer>
  )
}

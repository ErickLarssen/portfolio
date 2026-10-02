import { EagleMark, GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/Brand'
import { profile, projects } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

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
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              <li><a href="#sobre" className="hover:text-mist-100 transition-colors">Trajetória</a></li>
              <li><a href="#servicos" className="hover:text-mist-100 transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-mist-100 transition-colors">Como funciona</a></li>
              <li><a href="#recrutadores" className="hover:text-mist-100 transition-colors">Para recrutadores</a></li>
              <li><a href="#duvidas" className="hover:text-mist-100 transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">Projetos</h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              {projects.map((p) => (
                <li key={p.id}>
                  <a href={p.live} target="_blank" rel="noreferrer" className="hover:text-mist-100 transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-6">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-mist-500">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-mist-100 transition-colors">{profile.phoneDisplay}</a>
              <a href={`mailto:${profile.email}`} className="hover:text-mist-100 transition-colors break-all">{profile.email}</a>
              <span className="text-mist-900">{profile.site}</span>
              <span className="text-mist-900">São Paulo, Brasil · atendo todo o país</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <p>© {year} Erick Silva. Todos os direitos reservados.</p>
          <p>Desenhado e codificado por mim, do logo ao deploy.</p>
        </div>
      </div>
    </footer>
  )
}

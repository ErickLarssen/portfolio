// ─────────────────────────────────────────────────────────────
// Dados que não mudam com o idioma: links, contatos, stack e imagens.
// Os textos ficam em ./locales/pt.js e ./locales/en.js (mesmas chaves nos dois).
// Para adicionar um projeto ou serviço, inclua-o aqui e o texto nos dois idiomas.
// ─────────────────────────────────────────────────────────────

import pt from './locales/pt'
import en from './locales/en'

const profile = {
  name: 'Erick Silva',
  since: 2022,
  email: 'ericklarssen@gmail.com',
  whatsappNumber: '5511962121515',
  site: 'ericksilva.site',
  github: 'https://github.com/ErickLarssen',
  linkedin: 'https://www.linkedin.com/in/ericklarssen',
  briefing: 'https://briefing-digital.vercel.app/',
  // Coloque o PDF em /public e informe o caminho, ex.: '/curriculo-erick-silva.pdf'.
  // Enquanto for null, o botão de currículo não aparece.
  resume: null,
}

const projects = [
  {
    id: 'proadesk',
    name: 'ProaDesk',
    image: 'proadesk',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'MySQL', 'TanStack Query', 'Zod', 'Jest'],
    live: 'https://www.proadesk.tech/login',
    code: 'https://github.com/ErickLarssen/edutrack',
    accent: 'from-[#1d3a8a]/50',
  },
  {
    id: 'garagerick',
    name: 'Garagerick',
    // Vídeo no YouTube (não listado) no lugar da captura de tela: horizontal no desktop, vertical no celular.
    video: { landscape: 'Tnluhnc9Cjc', portrait: 'hnNgl5TcOmw' },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Content Collections', 'ESLint', 'Prettier'],
    live: 'https://garagerick.vercel.app/',
    code: 'https://github.com/ErickLarssen/garagerick',
    accent: 'from-crimson/40',
  },
  {
    id: 'briefing',
    name: 'Briefing Digital',
    image: 'briefing',
    stack: ['React', 'GSAP', 'Context API', 'CSS Modules', 'EmailJS', 'Vitest'],
    live: 'https://briefing-digital.vercel.app/',
    code: 'https://github.com/ErickLarssen/briefing-digital',
    accent: 'from-gold/30',
  },
  {
    id: 'previtempo',
    name: 'PreviTempo',
    image: 'previtempo',
    stack: ['React', 'Vite', 'Open-Meteo API', 'Geolocation API'],
    live: 'https://previtempo-six.vercel.app/',
    code: 'https://github.com/ErickLarssen/previtempo',
    accent: 'from-teal-700/40',
  },
  {
    id: 'cinerick',
    name: 'CinErick',
    image: 'cinerick',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://cinerick.online/',
    code: 'https://github.com/ErickLarssen/cinerick',
    accent: 'from-crimson/40',
  },
]

const services = [
  { id: 'sites', icon: 'Globe' },
  { id: 'systems', icon: 'LayoutDashboard' },
  { id: 'stores', icon: 'ShoppingBag' },
  { id: 'design', icon: 'PenTool' },
]

// Números reais. Revise sempre que algo mudar.
const stats = [
  { id: 'years', num: new Date().getFullYear() - profile.since },
  { id: 'projects', num: projects.length },
  { id: 'devices', num: 200, suffix: '+' },
  { id: 'schools', num: 1 },
]

const stack = [
  { id: 'frontend', items: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'React Router', 'GSAP'] },
  { id: 'backend', items: ['Node.js', 'Express', 'Prisma', 'MySQL', 'JWT', 'Zod', 'APIs REST'] },
  { id: 'quality', items: ['Jest', 'Supertest', 'Vitest', 'Testing Library', 'Git & GitHub'] },
  { id: 'deploy', items: ['Illustrator', 'Design systems', 'Vercel', 'Render'] },
]

const marquee = ['React', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Tailwind CSS', 'GSAP', 'TanStack Query', 'Zod', 'Jest', 'Vitest', 'Vite', 'Vercel', 'Illustrator']

// Junta os dados fixos com os textos de um idioma.
function build(t) {
  return {
    meta: t.meta,
    ui: t.ui,
    profile: {
      ...profile,
      ...t.profile,
      whatsapp: `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(t.profile.whatsappMessage)}`,
    },
    projects: projects.map((p) => ({ ...p, ...t.projects[p.id] })),
    services: services.map((s) => ({ ...s, ...t.services[s.id] })),
    stats: stats.map((s) => ({ ...s, label: t.stats[s.id] })),
    stack: stack.map((c) => ({ ...c, cat: t.stack[c.id] })),
    process: t.process,
    faqs: t.faqs,
    story: t.story,
    testimonials: t.testimonials,
    marquee,
  }
}

export const languages = ['pt', 'en']
export const content = { pt: build(pt), en: build(en) }

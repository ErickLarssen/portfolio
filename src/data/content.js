// ─────────────────────────────────────────────────────────────
// Todo o conteúdo do site fica aqui. Para atualizar textos,
// projetos, contatos ou serviços, edite somente este arquivo.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Erick Silva',
  role: 'Desenvolvedor Full-Stack',
  tagline: 'Transformo ideias em experiências digitais únicas.',
  since: 2022,
  email: 'ericklarssen@gmail.com',
  phoneDisplay: '(11) 96212-1515',
  whatsapp: 'https://wa.me/5511962121515?text=Ol%C3%A1%2C%20Erick!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  site: 'www.ericksilva.dev',
  github: 'https://github.com/ErickLarssen',
  linkedin: 'https://www.linkedin.com/in/ericklarssen',
  briefing: 'https://briefing-digital.vercel.app/',
  // Coloque o PDF em /public e informe o caminho, ex.: '/curriculo-erick-silva.pdf'.
  // Enquanto for null, o botão de currículo não aparece.
  resume: null,
}

export const projects = [
  {
    id: 'proadesk',
    name: 'ProaDesk',
    kind: 'SaaS · Em produção',
    highlight: 'Em uso real numa escola pública',
    image: 'proadesk',
    problem:
      'Escolas controlavam empréstimos de tablets, notebooks e Chromebooks no papel ou na planilha, sem saber quem retirou o quê nem o histórico de manutenção.',
    solution:
      'Sistema completo de gestão de equipamentos: empréstimo, devolução conferida item a item, manutenção com ciclo de vida e dashboard em tempo real, com 4 níveis de acesso.',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'MySQL', 'TanStack Query', 'Zod', 'Jest'],
    engineering: [
      'Arquitetura em camadas (Controller → Service → Repository)',
      'Transações atômicas e soft delete para rastreabilidade',
      'Validação em duas camadas com Zod',
      'Testes unitários e de integração',
    ],
    live: 'https://www.proadesk.tech/login',
    code: 'https://github.com/ErickLarssen/edutrack',
    accent: 'from-[#1d3a8a]/50',
  },
  {
    id: 'briefing',
    name: 'Briefing Digital',
    kind: 'Plataforma · Uso próprio com clientes',
    highlight: 'Briefing que se adapta ao projeto',
    image: 'briefing',
    problem:
      'Formulários genéricos fazem as mesmas perguntas frias para todo mundo, seja o pedido uma identidade visual, um sistema ou uma animação.',
    solution:
      'Experiência conversacional que muda as perguntas em tempo real conforme o tipo de projeto e entrega um briefing organizado, pronto para o primeiro contato.',
    stack: ['React', 'GSAP', 'Context API', 'CSS Modules', 'EmailJS', 'Vitest'],
    live: 'https://briefing-digital.vercel.app/',
    code: 'https://github.com/ErickLarssen/briefing-digital',
    accent: 'from-gold/30',
  },
  {
    id: 'previtempo',
    name: 'PreviTempo',
    kind: 'Web app · Estudo',
    highlight: 'Previsão do tempo em qualquer cidade',
    image: 'previtempo',
    problem:
      'Os apps de previsão do tempo na web costumam ser poluídos e difíceis de usar.',
    solution:
      'Dashboard de clima limpo, com busca por cidade, geolocalização, previsão estendida e estados de carregamento e erro bem tratados.',
    stack: ['React', 'Vite', 'Open-Meteo API', 'Geolocation API'],
    live: 'https://previtempo-six.vercel.app/',
    code: 'https://github.com/ErickLarssen/previtempo',
    accent: 'from-teal-700/40',
  },
  {
    id: 'cinerick',
    name: 'CinErick',
    kind: 'Site pessoal',
    highlight: 'Cinefilia em rankings',
    image: 'cinerick',
    problem:
      'Um projeto de paixão: reunir num só lugar os filmes, séries, animações e heróis que marcaram minha vida.',
    solution:
      'Site com 11 páginas temáticas em formato de ranking, carrossel interativo e layout responsivo, feito só com HTML, CSS e JavaScript puro.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://cinerick.online/',
    code: 'https://github.com/ErickLarssen/cinerick',
    accent: 'from-crimson/40',
  },
]

export const services = [
  {
    icon: 'Globe',
    title: 'Sites Profissionais',
    desc: 'Sites modernos e responsivos para empresas, autônomos, projetos ou uso pessoal. Rápidos, bonitos e fáceis de achar no Google.',
    tags: ['Institucional', 'Landing page', 'Portfólio'],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Sistemas Personalizados',
    desc: 'Soluções sob medida que facilitam seu dia a dia e otimizam processos, como o ProaDesk, que tirou da planilha o controle de equipamentos de uma escola.',
    tags: ['Painéis', 'Cadastros', 'Relatórios'],
  },
  {
    icon: 'ShoppingBag',
    title: 'Lojas Online',
    desc: 'Venda seus produtos ou serviços na internet com segurança e praticidade, numa loja com a cara da sua marca.',
    tags: ['E-commerce', 'Catálogo', 'Pagamentos'],
  },
  {
    icon: 'PenTool',
    title: 'Design & Identidade',
    desc: 'Antes do código, fui designer gráfico. Posso cuidar também do visual: logo, paleta e interface, para tudo sair coerente.',
    tags: ['Logo', 'UI design', 'Identidade visual'],
  },
]

export const process = [
  {
    title: 'Briefing',
    tagline: 'Entendo o que você precisa',
    desc: 'Você responde um briefing rápido e guiado (feito por mim, inclusive) ou me chama no WhatsApp. Em poucos minutos eu entendo seu negócio e seu objetivo.',
    label: 'Passo 1',
  },
  {
    title: 'Proposta',
    tagline: 'Escopo, prazo e valor claros',
    desc: 'Envio uma proposta com o que será entregue, em quanto tempo e por quanto. Sem letras miúdas.',
    label: 'Passo 2',
  },
  {
    title: 'Design',
    tagline: 'Você vê antes de eu programar',
    desc: 'Desenho as telas e você aprova o visual antes de qualquer linha de código. Ajustar aqui é rápido e barato.',
    label: 'Passo 3',
  },
  {
    title: 'Desenvolvimento',
    tagline: 'Você acompanha cada etapa',
    desc: 'Construo o projeto e publico versões de teste para você navegar e dar sua opinião enquanto ele ganha forma.',
    label: 'Passo 4',
  },
  {
    title: 'Entrega',
    tagline: 'No ar, e eu continuo por perto',
    desc: 'Publico seu projeto, ensino você a usar e sigo disponível para dúvidas e melhorias.',
    label: 'Passo 5',
  },
]

// Números reais. Revise sempre que algo mudar.
export const stats = [
  { num: new Date().getFullYear() - 2022, label: 'anos entre design e código' },
  { num: 4, label: 'projetos publicados' },
  { num: 200, suffix: '+', label: 'equipamentos rastreados pelo ProaDesk' },
  { num: 1, label: 'escola pública usando meu sistema' },
]

export const stack = [
  { cat: 'Frontend', items: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'React Router', 'GSAP'] },
  { cat: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'MySQL', 'JWT', 'Zod', 'APIs REST'] },
  { cat: 'Qualidade', items: ['Jest', 'Supertest', 'Vitest', 'Testing Library', 'Git & GitHub'] },
  { cat: 'Design & Deploy', items: ['Illustrator', 'Design systems', 'Vercel', 'Render'] },
]

export const marquee = ['React', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Tailwind CSS', 'GSAP', 'TanStack Query', 'Zod', 'Jest', 'Vitest', 'Vite', 'Vercel', 'Illustrator']

export const faqs = [
  { q: 'Quanto custa um site ou sistema?', a: 'Depende do tamanho e do que ele precisa fazer. Por isso começo com um briefing rápido: com ele, envio uma proposta com valor fechado, sem surpresas no meio do caminho.' },
  { q: 'Quanto tempo leva para ficar pronto?', a: 'Um site simples costuma ficar pronto em poucas semanas; sistemas e lojas levam mais. O prazo exato vem na proposta, junto com as etapas.' },
  { q: 'Eu não entendo nada de tecnologia. Tem problema?', a: 'Nenhum. Explico tudo em linguagem simples, você aprova cada etapa vendo as telas, e no final eu te ensino a usar o que foi entregue.' },
  { q: 'Você cuida do visual também, ou preciso de um designer?', a: 'Comecei como designer gráfico, então posso cuidar do visual inteiro: logo, cores e telas. Se você já tem uma identidade, sigo ela à risca.' },
  { q: 'Meu site vai funcionar bem no celular?', a: 'Sim. Todo projeto é responsivo: pensado para celular, tablet e computador desde o começo.' },
  { q: 'E depois que o projeto for entregue?', a: 'Continuo disponível para dúvidas, ajustes e novas funcionalidades. Combinamos o formato de suporte que fizer sentido para você.' },
]

export const story = [
  {
    key: 'design',
    eyebrow: '2022 · Elarssen Design',
    title: 'Tudo começou no design.',
    text: 'Comecei como designer gráfico, criando identidades visuais com a Elarssen Design. Ali aprendi o que torna uma marca memorável: forma, cor, contraste e intenção em cada detalhe.',
  },
  {
    key: 'code',
    eyebrow: 'Elarssen Code Solutions',
    title: 'Depois, o design ganhou código.',
    text: 'Eu queria ver minhas criações funcionando de verdade. Mergulhei no desenvolvimento full-stack e criei a Elarssen Code Solutions para meus primeiros projetos web, de APIs e bancos de dados às interfaces.',
  },
  {
    key: 'erick',
    eyebrow: 'Hoje · Erick Silva',
    title: 'Hoje, os dois andam juntos.',
    text: 'Como Erick Silva, uno o olhar de designer à engenharia de um dev full-stack. O resultado são produtos que encantam na primeira tela e se sustentam no código.',
  },
]

// Depoimentos reais de clientes, colegas ou usuários dos seus sistemas.
// Enquanto a lista estiver vazia, a seção não aparece no site.
// Ideal: até ~220 caracteres por depoimento, para caber no verso do card.
export const testimonials = [
  {
    name: 'Toni',
    role: 'Supervisor de T.I · Secretária da Educação do Estado de São Paulo',
    project: 'ProaDesk',            // opcional
    quote: 'Erick fez um sistema muito bom, atendeu todas as necessidades, nenhum estagiário PROATI teve essa iniciativa antes.',
  },
]
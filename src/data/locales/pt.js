// ─────────────────────────────────────────────────────────────
// Textos em português. A versão em inglês fica em ./en.js e
// precisa ter exatamente as mesmas chaves deste arquivo.
// Links, stack e dados que não mudam com o idioma ficam em ../content.js.
// ─────────────────────────────────────────────────────────────

export default {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Erick Silva | Desenvolvedor Full-Stack',
    description: 'Erick Silva, desenvolvedor full-stack com olhar de designer. Sites profissionais, sistemas personalizados e lojas online que unem design premium e código sólido.',
  },

  profile: {
    role: 'Desenvolvedor Full-Stack',
    tagline: 'Transformo ideias em experiências digitais únicas.',
    phoneDisplay: '(11) 96212-1515',
    whatsappMessage: 'Olá, Erick! Vim pelo seu site e gostaria de um orçamento.',
    location: 'São Paulo, Brasil · atendo todo o país',
  },

  ui: {
    skipToProjects: 'Pular para os projetos',
    language: 'Idioma',
    cursorOpen: 'ABRIR',
    nav: {
      home: 'Erick Silva, início',
      main: 'Principal',
      menu: 'Menu',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      cta: 'Vamos conversar',
      links: {
        sobre: 'Sobre',
        projetos: 'Projetos',
        servicos: 'Serviços',
        processo: 'Processo',
        recrutadores: 'Recrutadores',
        contato: 'Contato',
      },
    },
    hero: {
      // Divisor do tamanho da fonte no desktop: quanto maior a linha mais longa, maior o número.
      fit: 11.4,
      lines: [
        { words: ['Transformo', 'ideias'] },
        { words: ['em', 'experiências'], stroke: true },
        { words: ['digitais', 'únicas.'], gold: true },
      ],
      intro: 'Sou desenvolvedor full-stack com olhar de designer. Crio sites, sistemas e lojas online que unem visual premium e código sólido, do primeiro rascunho ao deploy.',
      primary: 'Iniciar um projeto',
      recruiter: 'Sou recrutador',
      ring: 'Design · Código · Full-Stack · Erick Silva · ',
      live: 'projetos no ar',
      scroll: 'Rolar para a trajetória',
    },
    logos: {
      label: 'Tecnologias que uso',
      title: 'Ferramentas do meu dia a dia',
    },
    story: {
      label: 'Minha trajetória',
      eyebrow: 'A trajetória · uma águia, três fases',
    },
    projects: {
      eyebrow: 'Projetos selecionados',
      title: 'Provas',
      titleAccent: 'no ar.',
      intro: 'Do sistema em uso numa escola pública ao projeto de paixão: cada um nasceu de um problema real.',
      problem: 'O problema',
      solution: 'O que eu fiz',
      view: 'Ver projeto',
      code: 'Código',
      open: (name) => `Abrir ${name} em nova aba`,
      screenshot: (name) => `Tela do projeto ${name}`,
      video: {
        play: (name) => `Assistir ao vídeo do ${name}, com som`,
        title: (name) => `Vídeo do ${name}`,
        label: 'Vídeo · 1:15 · com narração',
      },
    },
    stats: { label: 'Números' },
    testimonials: {
      eyebrow: 'Depoimentos',
      title: 'Quem já',
      titleAccent: 'trabalhou comigo.',
      hintHover: 'Passe o mouse',
      hintTouch: 'Toque',
      hintRest: 'em um card para ler.',
      project: 'Projeto',
      card: (name, flipped) => `Depoimento de ${name}. Ative para ${flipped ? 'voltar' : 'ler'}.`,
      translated: null,
    },
    services: {
      eyebrow: 'Soluções digitais para todos',
      title: 'O que posso',
      titleAccent: 'fazer por você.',
      intro: 'Para empresas, autônomos e projetos pessoais. Você não precisa entender de tecnologia: eu cuido da parte técnica e explico tudo pelo caminho.',
      cta: 'Conte sua ideia e receba uma proposta',
    },
    process: {
      eyebrow: 'Como funciona',
      title: 'Da ideia ao ar,',
      titleAccent: 'sem mistério.',
    },
    recruiters: {
      eyebrow: 'Para recrutadores',
      title: 'O que eu levo',
      titleAccent: 'para o seu time.',
      intro: 'Procuro uma vaga como desenvolvedor full-stack, onde eu possa somar com produto, interface e código bem testado.',
      resume: 'Baixar currículo',
      stackTitle: 'Stack que uso em produção',
      strengths: [
        { title: 'Full-stack de verdade', text: 'Modelo o banco, escrevo a API, construo a interface e faço o deploy. O ProaDesk está em produção com front na Vercel, API no Render e MySQL gerenciado.' },
        { title: 'Código que se sustenta', text: 'Arquitetura em camadas, validação no front e no back, transações atômicas e testes automatizados. Decisões documentadas no README, não na memória.' },
        { title: 'Olhar de designer', text: 'Vim do design gráfico. Traduzo layout em interface fiel e crio design systems próprios, sem depender de handoff para cada detalhe.' },
      ],
    },
    faq: {
      eyebrow: 'Dúvidas comuns',
      title: 'Perguntas que todo cliente faz.',
      intro: 'Não achou sua dúvida? Me chame no WhatsApp e eu respondo pessoalmente.',
    },
    cta: {
      eyebrow: 'Vamos conversar?',
      title: 'Tire sua ideia',
      titleAccent: 'do papel.',
      intro: 'Me conte o que você precisa. Respondo pessoalmente, normalmente no mesmo dia.',
      whatsapp: 'Chamar no WhatsApp',
      briefing: 'Preencher o briefing',
      email: 'ou escreva para',
    },
    footer: {
      nav: 'Navegação',
      projects: 'Projetos',
      contact: 'Contato',
      links: {
        sobre: 'Trajetória',
        servicos: 'Serviços',
        processo: 'Como funciona',
        recrutadores: 'Para recrutadores',
        duvidas: 'Dúvidas',
      },
      rights: 'Todos os direitos reservados.',
      signature: 'Desenhado e codificado por mim, do logo ao deploy.',
    },
  },

  projects: {
    proadesk: {
      kind: 'SaaS · Em produção',
      highlight: 'Em uso real numa escola pública',
      problem:
        'Escolas controlavam empréstimos de tablets, notebooks e Chromebooks no papel ou na planilha, sem saber quem retirou o quê nem o histórico de manutenção.',
      solution:
        'Sistema completo de gestão de equipamentos: empréstimo, devolução conferida item a item, manutenção com ciclo de vida e dashboard em tempo real, com 4 níveis de acesso.',
      engineering: [
        'Arquitetura em camadas (Controller → Service → Repository)',
        'Transações atômicas e soft delete para rastreabilidade',
        'Validação em duas camadas com Zod',
        'Testes unitários e de integração',
      ],
    },
    garagerick: {
      kind: 'Site pessoal · Vitrine',
      highlight: 'Meus carros e motos favoritos, até o Top 1',
      problem:
        'Um projeto de paixão, irmão do CinErick: reunir meus carros e motos favoritos com o cuidado visual de uma vitrine automotiva, e não numa lista comum.',
      solution:
        'Site estático com quatro rankings (populares, esportivos, antigos e motos) em contagem regressiva até o Top 1, vitrine em tela cheia com setas e gestos, busca e ficha técnica de cada veículo.',
      engineering: [
        'Conteúdo em Markdown com Content Collections do Astro',
        'Build que falha se algum ranking ficar inconsistente',
        'Imagens otimizadas em AVIF e WebP',
        'Cabeçalhos de segurança e cache longo na Vercel',
      ],
    },
    briefing: {
      kind: 'Plataforma · Uso próprio com clientes',
      highlight: 'Briefing que se adapta ao projeto',
      problem:
        'Formulários genéricos fazem as mesmas perguntas frias para todo mundo, seja o pedido uma identidade visual, um sistema ou uma animação.',
      solution:
        'Experiência conversacional que muda as perguntas em tempo real conforme o tipo de projeto e entrega um briefing organizado, pronto para o primeiro contato.',
    },
    previtempo: {
      kind: 'Web app · Estudo',
      highlight: 'Previsão do tempo em qualquer cidade',
      problem:
        'Os apps de previsão do tempo na web costumam ser poluídos e difíceis de usar.',
      solution:
        'Dashboard de clima limpo, com busca por cidade, geolocalização, previsão estendida e estados de carregamento e erro bem tratados.',
    },
    cinerick: {
      kind: 'Site pessoal',
      highlight: 'Cinefilia em rankings',
      problem:
        'Um projeto de paixão: reunir num só lugar os filmes, séries, animações e heróis que marcaram minha vida.',
      solution:
        'Site com 11 páginas temáticas em formato de ranking, carrossel interativo e layout responsivo, feito só com HTML, CSS e JavaScript puro.',
    },
  },

  services: {
    sites: {
      title: 'Sites Profissionais',
      desc: 'Sites modernos e responsivos para empresas, autônomos, projetos ou uso pessoal. Rápidos, bonitos e fáceis de achar no Google.',
      tags: ['Institucional', 'Landing page', 'Portfólio'],
    },
    systems: {
      title: 'Sistemas Personalizados',
      desc: 'Soluções sob medida que facilitam seu dia a dia e otimizam processos, como o ProaDesk, que tirou da planilha o controle de equipamentos de uma escola.',
      tags: ['Painéis', 'Cadastros', 'Relatórios'],
    },
    stores: {
      title: 'Lojas Online',
      desc: 'Venda seus produtos ou serviços na internet com segurança e praticidade, numa loja com a cara da sua marca.',
      tags: ['E-commerce', 'Catálogo', 'Pagamentos'],
    },
    design: {
      title: 'Design & Identidade',
      desc: 'Antes do código, fui designer gráfico. Posso cuidar também do visual: logo, paleta e interface, para tudo sair coerente.',
      tags: ['Logo', 'UI design', 'Identidade visual'],
    },
  },

  process: [
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
  ],

  stats: {
    years: 'anos entre design e código',
    projects: 'projetos publicados',
    devices: 'equipamentos rastreados pelo ProaDesk',
    schools: 'escola pública usando meu sistema',
  },

  stack: {
    frontend: 'Frontend',
    backend: 'Backend',
    quality: 'Qualidade',
    deploy: 'Design & Deploy',
  },

  faqs: [
    { q: 'Quanto custa um site ou sistema?', a: 'Depende do tamanho e do que ele precisa fazer. Por isso começo com um briefing rápido: com ele, envio uma proposta com valor fechado, sem surpresas no meio do caminho.' },
    { q: 'Quanto tempo leva para ficar pronto?', a: 'Um site simples costuma ficar pronto em poucas semanas; sistemas e lojas levam mais. O prazo exato vem na proposta, junto com as etapas.' },
    { q: 'Eu não entendo nada de tecnologia. Tem problema?', a: 'Nenhum. Explico tudo em linguagem simples, você aprova cada etapa vendo as telas, e no final eu te ensino a usar o que foi entregue.' },
    { q: 'Você cuida do visual também, ou preciso de um designer?', a: 'Comecei como designer gráfico, então posso cuidar do visual inteiro: logo, cores e telas. Se você já tem uma identidade, sigo ela à risca.' },
    { q: 'Meu site vai funcionar bem no celular?', a: 'Sim. Todo projeto é responsivo: pensado para celular, tablet e computador desde o começo.' },
    { q: 'E depois que o projeto for entregue?', a: 'Continuo disponível para dúvidas, ajustes e novas funcionalidades. Combinamos o formato de suporte que fizer sentido para você.' },
  ],

  story: [
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
  ],

  // Depoimentos reais de clientes, colegas ou usuários dos seus sistemas.
  // Enquanto a lista estiver vazia, a seção não aparece no site.
  // Ideal: até ~220 caracteres por depoimento, para caber no verso do card.
  testimonials: [
    {
      name: 'Toni',
      role: 'Supervisor de T.I · Secretaria da Educação do Estado de São Paulo',
      project: 'ProaDesk',            // opcional
      quote: 'Erick fez um sistema muito bom, atendeu todas as necessidades, nenhum estagiário PROATI teve essa iniciativa antes.',
    },
    {
      name: 'Tayna Leme',
      role: 'CEO · Tay Doces',
      project: 'Identidade Visual para a Tay Doces',            // opcional
      quote: 'Serviço excelente, fez do jeitinho que eu queria e ainda conseguiu aprimorar coisas que eu nem imaginava que teria como colocar, foi muito prestativo em conversar comigo e ver todos os detalhes e mandar várias sugestões pra chegar no melhor resultado.',
    },
  ],
}

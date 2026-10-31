// ─────────────────────────────────────────────────────────────
// English texts. Must keep exactly the same keys as ./pt.js.
// ─────────────────────────────────────────────────────────────

export default {
  meta: {
    htmlLang: 'en',
    title: 'Erick Silva | Full-Stack Developer',
    description: 'Erick Silva, a full-stack developer with a designer’s eye. Professional websites, custom systems and online stores that combine premium design with solid code.',
  },

  profile: {
    role: 'Full-Stack Developer',
    tagline: 'I turn ideas into unique digital experiences.',
    phoneDisplay: '+55 11 96212-1515',
    whatsappMessage: 'Hi, Erick! I found you through your website and would like a quote.',
    location: 'São Paulo, Brazil (UTC−3)',
  },

  ui: {
    skipToProjects: 'Skip to projects',
    language: 'Language',
    cursorOpen: 'OPEN',
    nav: {
      home: 'Erick Silva, home',
      main: 'Main',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      cta: 'Let’s talk',
      links: {
        sobre: 'About',
        projetos: 'Work',
        servicos: 'Services',
        processo: 'Process',
        recrutadores: 'Recruiters',
        contato: 'Contact',
      },
    },
    hero: {
      fit: 11.9,
      lines: [
        { words: ['I', 'turn', 'ideas'] },
        { words: ['into', 'unique'], stroke: true },
        { words: ['digital', 'experiences.'], gold: true },
      ],
      intro: 'I’m a full-stack developer with a designer’s eye. I build websites, systems and online stores that combine a premium look with solid code, from the first sketch to deployment.',
      primary: 'Start a project',
      recruiter: 'I’m a recruiter',
      ring: 'Design · Code · Full-Stack · Erick Silva · ',
      live: 'projects live',
      scroll: 'Scroll to my story',
    },
    logos: {
      label: 'Technologies I use',
      title: 'My everyday tools',
    },
    story: {
      label: 'My story',
      eyebrow: 'The story · one eagle, three phases',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Live',
      titleAccent: 'proof.',
      intro: 'From a system in daily use at a public school to a passion project: each one was born from a real problem.',
      problem: 'The problem',
      solution: 'What I built',
      view: 'View project',
      code: 'Code',
      open: (name) => `Open ${name} in a new tab`,
      screenshot: (name) => `Screenshot of ${name}`,
      video: {
        play: (name) => `Play the ${name} video, with sound`,
        title: (name) => `${name} video`,
        label: 'Video · 1:15 · narrated in Portuguese',
      },
    },
    stats: { label: 'Numbers' },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'People who’ve',
      titleAccent: 'worked with me.',
      hintHover: 'Hover over',
      hintTouch: 'Tap',
      hintRest: 'a card to read it.',
      project: 'Project',
      card: (name, flipped) => `Testimonial from ${name}. Activate to ${flipped ? 'go back' : 'read'}.`,
      translated: 'Translated from Portuguese',
    },
    services: {
      eyebrow: 'Digital solutions for everyone',
      title: 'What I can',
      titleAccent: 'do for you.',
      intro: 'For businesses, freelancers and personal projects. You don’t need to understand technology: I handle the technical side and explain everything along the way.',
      cta: 'Tell me your idea and get a proposal',
    },
    process: {
      eyebrow: 'How it works',
      title: 'From idea to launch,',
      titleAccent: 'no mystery.',
    },
    recruiters: {
      eyebrow: 'For recruiters',
      title: 'What I bring',
      titleAccent: 'to your team.',
      intro: 'I’m looking for a full-stack developer role where I can contribute across product, interface and well-tested code.',
      resume: 'Download résumé',
      stackTitle: 'Stack I use in production',
      strengths: [
        { title: 'Truly full-stack', text: 'I model the database, write the API, build the interface and handle the deploy. ProaDesk runs in production with the frontend on Vercel, the API on Render and managed MySQL.' },
        { title: 'Code that holds up', text: 'Layered architecture, validation on both front and back end, atomic transactions and automated tests. Decisions are documented in the README, not kept in someone’s head.' },
        { title: 'A designer’s eye', text: 'I come from graphic design. I turn layouts into faithful interfaces and create my own design systems, without needing a handoff for every detail.' },
      ],
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Questions every client asks.',
      intro: 'Didn’t find your question? Message me on WhatsApp and I’ll answer personally.',
    },
    cta: {
      eyebrow: 'Shall we talk?',
      title: 'Bring your idea',
      titleAccent: 'to life.',
      intro: 'Tell me what you need. I reply personally, usually on the same day.',
      whatsapp: 'Message me on WhatsApp',
      briefing: 'Fill out the briefing',
      email: 'or email',
    },
    footer: {
      nav: 'Navigation',
      projects: 'Projects',
      contact: 'Contact',
      links: {
        sobre: 'My story',
        servicos: 'Services',
        processo: 'How it works',
        recrutadores: 'For recruiters',
        duvidas: 'FAQ',
      },
      rights: 'All rights reserved.',
      signature: 'Designed and coded by me, from logo to deploy.',
    },
  },

  projects: {
    proadesk: {
      kind: 'SaaS · In production',
      highlight: 'In real use at a public school',
      problem:
        'Schools tracked loans of tablets, laptops and Chromebooks on paper or in spreadsheets, with no idea who took what or what the maintenance history was.',
      solution:
        'A complete equipment management system: loans, item-by-item checked returns, maintenance with a full lifecycle and a real-time dashboard, with 4 access levels.',
      engineering: [
        'Layered architecture (Controller → Service → Repository)',
        'Atomic transactions and soft delete for traceability',
        'Two-layer validation with Zod',
        'Unit and integration tests',
      ],
    },
    garagerick: {
      kind: 'Personal site · Showcase',
      highlight: 'My favorite cars and bikes, down to the Top 1',
      problem:
        'A passion project and sibling of CinErick: bringing together my favorite cars and motorcycles with the visual care of an automotive showroom, not just a plain list.',
      solution:
        'A static site with four rankings (everyday cars, sports cars, classics and motorcycles) counting down to the Top 1, a full-screen showcase with arrow and swipe navigation, search and a spec sheet for each vehicle.',
      engineering: [
        'Markdown content with Astro Content Collections',
        'A build that fails if any ranking becomes inconsistent',
        'Images optimized as AVIF and WebP',
        'Security headers and long-term caching on Vercel',
      ],
    },
    briefing: {
      kind: 'Platform · Used with my own clients',
      highlight: 'A briefing that adapts to the project',
      problem:
        'Generic forms ask everyone the same cold questions, whether the request is a visual identity, a system or an animation.',
      solution:
        'A conversational experience that changes its questions in real time based on the project type and delivers an organized briefing, ready for the first meeting.',
    },
    previtempo: {
      kind: 'Web app · Study project',
      highlight: 'Weather forecast for any city',
      problem:
        'Weather apps on the web tend to be cluttered and hard to use.',
      solution:
        'A clean weather dashboard with city search, geolocation, extended forecast and well-handled loading and error states.',
    },
    cinerick: {
      kind: 'Personal site',
      highlight: 'Film love, in rankings',
      problem:
        'A passion project: bringing together in one place the movies, series, animations and heroes that shaped my life.',
      solution:
        'A site with 11 themed ranking pages, an interactive carousel and a responsive layout, built with nothing but HTML, CSS and vanilla JavaScript.',
    },
  },

  services: {
    sites: {
      title: 'Professional Websites',
      desc: 'Modern, responsive websites for businesses, freelancers, projects or personal use. Fast, beautiful and easy to find on Google.',
      tags: ['Corporate', 'Landing page', 'Portfolio'],
    },
    systems: {
      title: 'Custom Systems',
      desc: 'Tailor-made solutions that make your day easier and streamline processes, like ProaDesk, which moved a school’s equipment tracking out of spreadsheets.',
      tags: ['Dashboards', 'Records', 'Reports'],
    },
    stores: {
      title: 'Online Stores',
      desc: 'Sell your products or services online safely and easily, in a store that looks like your brand.',
      tags: ['E-commerce', 'Catalog', 'Payments'],
    },
    design: {
      title: 'Design & Identity',
      desc: 'Before code, I was a graphic designer. I can take care of the visuals too: logo, palette and interface, so everything feels consistent.',
      tags: ['Logo', 'UI design', 'Visual identity'],
    },
  },

  process: [
    {
      title: 'Briefing',
      tagline: 'I understand what you need',
      desc: 'You fill out a quick, guided briefing (which I built, by the way) or message me on WhatsApp. In a few minutes I understand your business and your goal.',
      label: 'Step 1',
    },
    {
      title: 'Proposal',
      tagline: 'Clear scope, timeline and price',
      desc: 'I send a proposal with what will be delivered, how long it will take and how much it costs. No fine print.',
      label: 'Step 2',
    },
    {
      title: 'Design',
      tagline: 'You see it before I code it',
      desc: 'I design the screens and you approve the look before a single line of code. Changes at this stage are quick and cheap.',
      label: 'Step 3',
    },
    {
      title: 'Development',
      tagline: 'You follow every step',
      desc: 'I build the project and publish test versions so you can browse them and share your feedback as it takes shape.',
      label: 'Step 4',
    },
    {
      title: 'Delivery',
      tagline: 'Live, and I stay close by',
      desc: 'I launch your project, show you how to use it and remain available for questions and improvements.',
      label: 'Step 5',
    },
  ],

  stats: {
    years: 'years between design and code',
    projects: 'published projects',
    devices: 'devices tracked by ProaDesk',
    schools: 'public school using my system',
  },

  stack: {
    frontend: 'Frontend',
    backend: 'Backend',
    quality: 'Quality',
    deploy: 'Design & Deploy',
  },

  faqs: [
    { q: 'How much does a website or system cost?', a: 'It depends on its size and what it needs to do. That’s why I start with a quick briefing: based on it, I send a proposal with a fixed price, with no surprises along the way.' },
    { q: 'How long does it take?', a: 'A simple website is usually ready in a few weeks; systems and stores take longer. The exact timeline comes in the proposal, along with each stage.' },
    { q: 'I don’t know anything about technology. Is that a problem?', a: 'Not at all. I explain everything in plain language, you approve each stage by seeing the screens, and at the end I show you how to use what was delivered.' },
    { q: 'Do you handle the visuals too, or do I need a designer?', a: 'I started out as a graphic designer, so I can handle the entire look: logo, colors and screens. If you already have a brand identity, I follow it to the letter.' },
    { q: 'Will my website work well on mobile?', a: 'Yes. Every project is responsive: designed for phones, tablets and desktops from the very beginning.' },
    { q: 'What happens after the project is delivered?', a: 'I remain available for questions, adjustments and new features. We agree on whatever support format makes sense for you.' },
  ],

  story: [
    {
      key: 'design',
      eyebrow: '2022 · Elarssen Design',
      title: 'It all started with design.',
      text: 'I started as a graphic designer, creating visual identities with Elarssen Design. That’s where I learned what makes a brand memorable: shape, color, contrast and intention in every detail.',
    },
    {
      key: 'code',
      eyebrow: 'Elarssen Code Solutions',
      title: 'Then, design met code.',
      text: 'I wanted to see my creations actually working. I dove into full-stack development and founded Elarssen Code Solutions for my first web projects, from APIs and databases to interfaces.',
    },
    {
      key: 'erick',
      eyebrow: 'Today · Erick Silva',
      title: 'Today, the two go hand in hand.',
      text: 'As Erick Silva, I combine a designer’s eye with the engineering of a full-stack developer. The result is products that delight on the first screen and hold up in the code.',
    },
  ],

  // Translations of the original testimonials (written in Portuguese).
  testimonials: [
    {
      name: 'Toni',
      role: 'IT Supervisor · São Paulo State Department of Education',
      project: 'ProaDesk',
      quote: 'Erick built a really good system that met every need. No PROATI intern had ever taken that kind of initiative before.',
    },
    {
      name: 'Tayna Leme',
      role: 'CEO · Tay Doces',
      project: 'Visual identity for Tay Doces',
      quote: 'Excellent service. He did it exactly the way I wanted and even improved things I didn’t imagine could be added. He was very helpful, talked everything through with me, went over every detail and sent lots of suggestions to reach the best result.',
    },
  ],
}

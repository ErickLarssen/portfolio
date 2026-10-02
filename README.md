# Erick Silva — Portfólio

Site pessoal de Erick Silva, desenvolvedor full-stack. Feito em React 19, Vite, Tailwind CSS e Framer Motion.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/ para publicar (Vercel, Netlify...)
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, projetos, serviços, FAQ, contatos, números | `src/data/content.js` |
| Currículo para download | coloque o PDF em `public/` e preencha `profile.resume` em `content.js` |
| Imagens dos projetos | `src/assets/projects/*.webp` |
| Vetores das três águias | `src/data/eagles.js` (extraídos dos arquivos .ai originais) |
| Cores e fontes | `tailwind.config.js` e `index.html` |

## Destaques técnicos

- **Trajetória em scroll** (`StorySection.jsx`): a águia coroada se redesenha nas três fases da marca (Elarssen Design → Elarssen Code Solutions → Erick Silva). O contorno de cada vetor é desenhado com `stroke-dashoffset` e depois preenchido, tudo controlado pelo progresso da rolagem.
- **Cursor personalizado acessível**: só aparece com mouse e sem preferência de movimento reduzido; em toque e teclado o cursor do sistema continua.
- **Foco visível** em todos os elementos interativos e link de "pular para os projetos".
- Respeita `prefers-reduced-motion` via `MotionConfig`.

## Paleta

| Token | Cor | Uso |
| --- | --- | --- |
| `gold` | `#d6a44f` | cor principal (monograma ES) |
| `ember` | `#f0892a` | destaque secundário (cartão de visitas) |
| `crimson` / `navy` | `#d92639` / `#1e2d53` | cores históricas, só na trajetória |
| `ink-950` | `#09090b` | fundo |

Fontes: Zodiak (títulos) e Satoshi (texto), da Fontshare; JetBrains Mono (detalhes técnicos).

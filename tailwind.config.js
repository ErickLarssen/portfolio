/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pretos neutros e levemente quentes (base do cartão de visitas)
        ink: {
          950: '#09090b',
          900: '#0f0f12',
          800: '#16161a',
          700: '#1e1e23',
          600: '#2a2a31',
        },
        // Dourado do monograma ES — cor principal
        gold: {
          DEFAULT: '#d6a44f',
          light: '#e8c27a',
          dim: '#b8862f',
        },
        // Laranja de destaque do cartão — cor secundária, usar com moderação
        ember: {
          DEFAULT: '#f0892a',
          dim: '#c96e1c',
        },
        // Cores históricas da marca (usadas no capítulo da trajetória)
        crimson: '#d92639',
        navy: '#1e2d53',
        mist: {
          900: '#8e8e98',
          700: '#bcbcc5',
          500: '#dcdce2',
          100: '#f4f2ee',
        },
      },
      fontFamily: {
        display: ['"Zodiak"', 'Georgia', 'serif'],
        body: ['"Satoshi"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear infinite reverse',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
}

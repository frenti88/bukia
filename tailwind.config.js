/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          pure: '#FFFFFF',
          warm: '#F5F2EB',
          subtle: '#EFECE5',
          muted: '#E6E1D6',
        },
        ink: {
          DEFAULT: '#171615',
          light: '#2E2B27',
          muted: '#635F58',
          faint: '#9E9A92',
          hairline: '#D8D3C8',
        },
        editorial: {
          terracotta: '#A3482C',
          sage: '#2E4A3E',
          ochre: '#B87B28',
          navy: '#1A2938',
          burgundy: '#5A1E28',
          cream: '#FAF6EE'
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-editorial': '0.12em',
      },
      boxShadow: {
        'book-spine': '-4px 0 12px -2px rgba(0, 0, 0, 0.15), inset 3px 0 6px -1px rgba(255, 255, 255, 0.25)',
        'book-elevated': '0 20px 35px -10px rgba(23, 22, 21, 0.12), 0 8px 16px -6px rgba(23, 22, 21, 0.08)',
        'book-hover': '0 28px 45px -12px rgba(23, 22, 21, 0.2), 0 12px 22px -8px rgba(23, 22, 21, 0.12)',
        'paper-sheet': '0 1px 3px rgba(0,0,0,0.05), 0 10px 25px -5px rgba(23, 22, 21, 0.04)',
      },
      aspectRatio: {
        'book': '1 / 1.48',
      }
    },
  },
  plugins: [],
}

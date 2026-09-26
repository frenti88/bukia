/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        ink: '#282828',
        'ink-muted': '#282828',
        'ink-faint': '#282828',
        gray: {
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#282828',
          950: '#282828',
        },
        stone: {
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#282828',
          950: '#282828',
        },
        zinc: {
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#282828',
          950: '#282828',
        },
        slate: {
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#282828',
          950: '#282828',
        },
        neutral: {
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#282828',
          950: '#282828',
        },
      },
      colors: {
        brand: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F17',
        },
        accent: {
          mint: '#10B981',
          emerald: '#059669',
          sageBadge: '#EBF8F2',
          sageText: '#1B7A52',
        }
      },
      fontFamily: {
        sans: ['"Google Sans"', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'google-sans': ['"Google Sans"', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card-subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'book-realistic': '0 15px 30px -8px rgba(0, 0, 0, 0.18), 0 5px 12px -3px rgba(0, 0, 0, 0.1)',
        'book-hero': '0 25px 45px -12px rgba(0, 0, 0, 0.28), 0 10px 20px -6px rgba(0, 0, 0, 0.15)',
        'glass-pill': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      aspectRatio: {
        'book': '1 / 1.48',
      }
    },
  },
  plugins: [],
}

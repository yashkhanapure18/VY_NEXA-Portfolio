import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0A0B0F',
          card: '#0B0C11',
          elevated: '#12141C',
          border: 'rgba(242, 241, 237, 0.1)',
        },
        text: {
          primary: '#F2F1ED',
          muted: '#8C93A3',
        },
        accent: {
          periwinkle: '#7FA8D9',
          periwinkleMuted: 'rgba(127, 168, 217, 0.2)',
          cream: '#E7E5E0',
          silver: '#D4D8E2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config

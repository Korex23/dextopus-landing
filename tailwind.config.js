/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050508',
          dark: '#08080d',
          darker: '#0c0d17',
        },
        text: {
          DEFAULT: '#d4e0f0',
          dim: '#8096b0',
        },
        accent: {
          gold: '#FFB800',
          'gold-light': '#FFD060',
        },
        success: '#00DD90',
        error: '#FF4455',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': 'clamp(2.5rem, 6vw, 5rem)',
        'h1': 'clamp(2rem, 4vw, 3.5rem)',
        'h2': 'clamp(1.75rem, 3vw, 2.5rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.75rem)',
        'body': 'clamp(0.875rem, 1.5vw, 1.0625rem)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        flow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        txFade: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        flow: 'flow 20s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        txFade: 'txFade 4.5s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

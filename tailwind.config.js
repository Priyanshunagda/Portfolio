/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#090d16',
          light: '#131926',
          dark: '#05070c',
          deep: '#020305',
        },
        accent: {
          teal: '#0d9488',
          cyan: '#0891b2',
          purple: '#7c3aed',
          pink: '#db2777',
          indigo: '#4f46e5',
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.05)',
          bg: 'rgba(15, 22, 38, 0.7)',
        }
      },
      boxShadow: {
        'neon-teal': '0 4px 20px rgba(13, 148, 136, 0.15)',
        'neon-purple': '0 4px 20px rgba(124, 58, 237, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, rgba(13, 148, 136, 0.08), rgba(124, 58, 237, 0.08))',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        blob: "blob 7s infinite",
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -30px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-15px, 15px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      }
    },
  },
  plugins: [],
}
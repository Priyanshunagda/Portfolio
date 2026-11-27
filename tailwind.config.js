/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        accent: {
          teal: '#0f766e',
          cyan: '#0e7490',
          purple: '#6d28d9',
          pink: '#be185d',
          indigo: '#234bbc',
        },
      },
      boxShadow: {
        panel: '0 2px 4px rgba(15, 23, 42, 0.04), 0 10px 32px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
};

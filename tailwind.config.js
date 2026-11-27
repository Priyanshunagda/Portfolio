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
        canvas: '#f4f7fb',
        accent: {
          teal: '#0f766e',
          cyan: '#0e7490',
          purple: '#6d28d9',
          pink: '#be185d',
          indigo: '#2552ab',
        },
      },
      boxShadow: {
        panel: '0 2px 4px rgba(24, 44, 76, 0.04), 0 10px 30px rgba(24, 44, 76, 0.06)',
        'panel-raised': '0 4px 8px rgba(24, 44, 76, 0.05), 0 15px 34px rgba(24, 44, 76, 0.12)',
      },
    },
  },
  plugins: [],
};

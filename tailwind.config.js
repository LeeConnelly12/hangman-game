import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mouse Memoirs', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-navy': '#261676',
        blue: '#2463FF',
        purple: '#887DC0',
      },
    },
  },
  plugins: [],
}

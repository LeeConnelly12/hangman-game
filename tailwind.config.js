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
        'light-blue': '#7199FF',
        purple: '#887DC0',
        pink: '#FE71FE',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8EDE3',
          DEFAULT: '#FAF3E0',
          dark: '#EADBC8',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        luxury: {
          black: '#1A1A1A',
          gray: '#4A4A4A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        48: '3rem',
        22: '1.375rem',
        20: '1.25rem',
        12: '0.75rem',
      },
      lineHeight: {
        60: '3.75rem',
        24: '1.5rem',
        20: '1.25rem',
        19: '1.1875rem',
        15: '0.9375rem',
      },
      maxWidth: {
        main: '1440px',
        content: '640px',
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '567px' },
      },
      colors: {
        black: '#15202A',
        grey: '#969696',
        sky: '#B8C7ED',
        blue: '#4C7BF3',
        red: '#FF5466',
      },
      boxShadow: {
        custom: '0px 5px 10px 2px rgba(76, 123, 243, 0.23)',
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        salad: '#E0F1E8',
        grey: '#2A4144',
        'mid-grey': '#86A2A5',
        green: '#0C7D69',
        'mid-green': '#E0F1E8',
        red: '#D94747',
      },
      fontFamily: {
        poppins: ['Karla', 'sans-serif'],
      },
      fontSize: {
        32: '2rem',
        18: '1.125rem',
      },
      maxWidth: {
        main: '1440px',
        content: '736px',
      },
      screens: {
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
    },
  },
  plugins: [],
}

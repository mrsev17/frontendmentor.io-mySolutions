/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: { max: '1160px' },
        tablet: { max: '768px' },
        mobile: { max: '567px' },
      },
      fontFamily: {
        sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        main: '1440px',
        content: '1110px',
      },
      colors: {
        purple: '#512051',
        pink: '#F7F2F7',
        'deep-pink': '#EE69A4',
        violet: '#927B91',
      },
      fontSize: {
        56: '3.5rem',
        40: '2.5rem',
        19: '1.1875rem',
        17: '1.0625rem',
      },
      lineHeight: {
        48: '3rem',
        25: '1.5625rem',
        22: '1.375rem',
      },
    },
  },
  plugins: [],
}

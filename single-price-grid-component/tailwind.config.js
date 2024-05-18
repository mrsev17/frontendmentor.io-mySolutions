/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        32: '2rem',
        24: '1.5rem',
        18: '1.125rem',
        15: '0.9375rem',
        14: '0.875rem',
      },
      lineHeight: {
        37: '2.3125rem',
        26: '1.625rem',
        21: '1.3125rem',
        19: '1.1875rem',
      },
      maxWidth: {
        main: '1440px',
        content: '635px',
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '567px' },
      },
      colors: {
        sky: '#E6EFF5',
        ocean: '#2AB3B1',
        green: '#C0DF33',
        grey: '#9AA7BE',
      },
      boxShadow: {
        custom: '0px 10px 10px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

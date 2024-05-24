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
      lineHeight: {
        100: '100%',
        150: '150%',
      },
      maxWidth: {
        main: '1440px',
        content: '736px',
      },
      screens: {
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
      animation: {
        notificationIn: 'notificationIn 3.00s ease-in-out',
      },
      keyframes: {
        notificationIn: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '75%': { opacity: '1' },
          '0%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        36: '2.25rem',
        24: '1.5rem',
        20: '1.25rem',
        15: '0.9375rem',
        13: '0.8125rem',
      },
      lineHeight: {
        54: '3.375rem',
        30: '1.875rem',
        25: '1.5625rem',
      },
      maxWidth: {
        main: '1440px',
        content: '1110px',
        card: '350px',
      },
      screens: {
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
      colors: {
        red: '#EA5454',
        green: '#44D3D2',
        orange: '#FCAE4A',
        blue: '#549EF2',
        black: '#4D4F62',
        app: '#FAFAFA',
      },
      boxShadow: {
        card: '0px 15px 30px -11px rgba(131, 166, 210, 0.5)',
      },
    },
  },
  plugins: [],
}

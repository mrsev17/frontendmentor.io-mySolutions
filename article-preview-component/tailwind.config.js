/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        20: '1.25rem',
        16: '1rem',
        13: '0.8125rem',
      },
      lineHeight: {
        24: '1.5rem',
      },
      maxWidth: {
        main: '1440px',
        content: '730px',
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '567px' },
      },
      colors: {
        'dark-xs': '#48556A',
        'dark-md': '#6E8098',
        'dark-lg': '#9DAEC2',
        sky: '#ECF2F8',
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
  plugins: [flowbite.plugin()],
}

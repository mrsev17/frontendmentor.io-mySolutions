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
        13: '0.8125rem',
      },
      maxWidth: {
        main: '1440px',
        content: '730px',
      },
      colors: {
        'dark-xs': '#48556A',
        'dark-md': '#6E8098',
        'dark-lg': '#9DAEC2',
        sky: '#ECF2F8',
      },
    },
  },
  plugins: [flowbite.plugin()],
}

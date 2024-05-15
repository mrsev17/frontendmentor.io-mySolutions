/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        32: '2rem',
        14: '0.875rem',
      },
      lineHeight: {
        32: '2rem',
        17: '1.0625rem',
      },
      backgroundImage: (theme) => ({
        gradient:
          'linear-gradient(180.00deg, rgb(176, 104, 233),rgb(100, 99, 231) 100%);',
        'shadow-desktop': "url('/src/assets/images/bg-pattern-desktop.svg')",
        'shadow-mobile': 'url(/src/assets/images/bg-pattern-mobile.svg)',
      }),
      boxShadow: {
        custom: '0px 50px 50px -20px rgba(53, 18, 122, 0.5)',
      },
      backgroundPosition: {
        'desktop-pos': '-532px -250px',
        'mobile-pos': '50% -1%',
      },
      backgroundSize: {
        100: '100%',
        '237px': '237px',
      },
      screens: {
        desktop: { min: '992px' },
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
      maxWidth: {
        main: '1440px',
        content: '920px',
      },
      animation: {
        rotate180: 'rotate180 .5s ease-in-out',
      },
      keyframes: {
        rotate180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        64: '4rem',
      },
      lineHeight: {
        71: '4.4375rem',
        64: '4rem',
      },
      backgroundImage: (theme) => ({
        gradient:
          'linear-gradient(135.00deg, rgb(248, 191, 191) 39.615%,rgb(238, 139, 139) 139.615%)',
        'gradient-2':
          'linear-gradient(135.00deg, rgb(248, 191, 191) -26.127%,rgb(238, 139, 139) 73.873%)',
        'card-1':
          'linear-gradient(221.63deg, rgb(255, 241, 241) 1.892%,rgb(255, 255, 255) 95.744%)',
        'card-2':
          'linear-gradient(149.89deg, rgb(255, 255, 255) -22.515%,rgb(255, 244, 244) 49.904%)',
        'pattern-desktop': "url('/src/assets/images/bg-pattern-desktop.svg')",
        mobile:
          'linear-gradient(149.89deg, rgb(255, 255, 255) 19.964%,rgb(255, 244, 244) 115.203%)',
      }),
      colors: {
        brown: '#423A3A',
        error: '#F96464',
        'dusty-rose': '#CE9898',
        'coral-pink': '#EE8B8B',
      },
      boxShadow: {
        custom: '0px 15px 20px 0px rgba(198, 110, 110, 0.25)',
      },
      screens: {
        desktop: { min: '992px' },
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
      maxWidth: {
        main: '1440px',
        content: '1110px',
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

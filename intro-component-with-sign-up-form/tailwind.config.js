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
        50: '3.125rem',
        28: '1.75rem',
        15: '0.9375rem',
        14: '0.875rem',
        11: '0.6875rem',
      },
      lineHeight: {
        55: '3.4375rem',
        26: '1.625rem',
        17: '1.0625rem',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/src/assets/images/bg-intro-desktop.png')",
      }),
      colors: {
        salmon: '#FF7979',
        green: '#38CC8B',
        mint: '#77E2B3',
        purple: '#5E54A4',
        black: '#3D3B48',
      },
      boxShadow: {
        custom: '0px 8px 0px 0px rgba(0, 0, 0, 0.15)',
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

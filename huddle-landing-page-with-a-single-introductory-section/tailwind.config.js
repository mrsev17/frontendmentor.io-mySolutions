/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#684BB1',
        pink: '#E880E8',
        icons: '#FF52C1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        40: '2.5rem',
        24: '1.5rem',
        18: '1.125rem',
        16: '1rem',
        12: '0.75rem',
      },
      lineHeight: {
        60: '3.75rem',
        36: '2.25rem',
        27: '1.6875rem',
        24: '1.5rem',
      },
      boxShadow: {
        custom: '2px 4px 9px 3px rgba(0, 0, 0, 0.26)',
      },
      maxWidth: {
        main: '1440px',
        content: '1280px',
      },
      screens: {
        tablet: { max: '992px' },
        mobile: { max: '567px' },
      },
      backgroundImage: (theme) => ({
        'pattern-desktop': "url('/src/assets/images/bg-desktop.svg')",
        'pattern-mobile': "url('/src/assets/images/bg-mobile.svg')",
      }),
    },
  },
  plugins: [],
}

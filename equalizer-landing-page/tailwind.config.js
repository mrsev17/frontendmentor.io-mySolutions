module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#66E2DC',
        red: '#FA7453',
        orange: '#FFB964',
        cream: '#FCFAF9',
        dark: '#191826',
      },
      width: {
        main: '1440px',
        content: '1110px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-main-desktop.png')",
      },
      backgroundPosition: {
        '50-25': '50% 25%',
      },
      fontSize: {
        88: '5.5rem',
        65: '4.0625rem',
        40: '2.5rem',
        20: '1.25rem',
        18: '1.125rem',
      },
      lineHeight: {
        88: '5.5rem',
        52: '3.25rem',
        34: '2.125rem',
        32: '2rem',
      },
    },
  },
  plugins: [],
}

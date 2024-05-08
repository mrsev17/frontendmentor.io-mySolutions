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
      maxWidth: {
        main: '1440px',
        content: '1110px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-main-desktop.png')",
        premium: "url('/src/assets/bg-pattern-2.svg')",
        'main-mobile': "url('/src/assets/bg-main-mobile.png')",
      },
      backgroundPosition: {
        '50-25': '50% 25%',
        '40-0': '42% -35%',
        '20-20': '-20% -20%',
      },
      fontSize: {
        88: '5.5rem',
        65: '4.0625rem',
        40: '2.5rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
      },
      lineHeight: {
        88: '5.5rem',
        64: '4rem',
        52: '3.25rem',
        48: '3rem',
        40: '2.5rem',
        34: '2.125rem',
        32: '2rem',
        26: '1.625rem',
      },
      screens: {
        tablet: { max: '768px' },
        iphone: { max: '567px' },
      },
    },
  },
  plugins: [],
}

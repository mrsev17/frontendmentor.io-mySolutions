module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#19A1AE',
        dark: '#2E3349',
        grey: '#6B7082',
        'light-grey': '#E8E9EC',
      },
      maxWidth: {
        main: '350px',
      },
      backgroundImage: {
        'pattern-top': "url('/src/assets/bg-pattern-top.svg')",
        'pattern-bottom': "url('/src/assets/bg-pattern-bottom.svg')",
      },
      backgroundPosition: {
        '10-200': '-10% -200px',
        '140-500': '140% 500px',
        '40-60': '-40% -60px',
        '0-500': '0 500px',
      },
      backgroundSize: {
        '49%': '49%',
        '60%': '60%',
      },
      fontSize: {
        18: '1.125rem',
        14: '0.875rem',
        10: '0.625rem',
      },
      lineHeight: {
        22: '1.375rem',
        18: '1.125rem',
        17: '1.0625rem',
      },
      screens: {
        tablet: { max: '768px' },
        iphone: { max: '567px' },
      },
      boxShadow: {
        card: '0px 50px 100px -20px rgba(8, 70, 94, 0.5)',
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-oceanic': '#4D96A9',
        'light-oceanic': '#8FE3F9',
        'deep-purple': '#855FB1',
        'light-purple': '#D9B8FF',
        'dark-grey': '#87879D',
        dark: '#28283D',
        white: '#FAFAFA',
      },
      maxWidth: {
        main: '1440px',
        content: '1110px',
        'sm-content': '520px',
      },
      screens: {
        tablet: { max: '768px' },
        iphone: { max: '567px' },
        xl: '1440px',
      },

      fontSize: {
        64: '4rem',
        18: '1.125rem',
      },
      lineHeight: {
        64: '4rem',
        26: '1.625rem',
      },
    },
  },
  plugins: [],
}

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
      backgroundImage: {
        'footer-desktop': "url('/src/assets/images/desktop/image-footer.jpg')",
        'footer-tablet': "url('/src/assets/images/tablet/image-footer.jpg')",
        'footer-mobile': "url('/src/assets/images/mobile/image-footer.jpg')",
      },
      screens: {
        md: { max: '1200px' },
        lg: { max: '1080px' },
        tablet: { max: '768px' },
        iphone: { max: '567px' },
        'sm-iphone': { max: '400px' },
        xl: '1440px',
      },

      fontSize: {
        64: '4rem',
        48: '3rem',
        44: '2.75rem',
        40: '2.5rem',
        32: '2rem',
        18: '1.125rem',
      },
      lineHeight: {
        64: '4rem',
        48: '3rem',
        44: '2.75rem',
        26: '1.625rem',
      },
    },
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chivo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#121725',
        error: '#FB3E3E',
        mint: '#54E6AF',
        'xs-mint': '#B3FFE2',
        'md-grey': '#5A668A',
        'sm-grey': '#C2CBE5',
        'xl-grey': '#2C344B',
      },
      maxWidth: {
        main: '1440px',
        content: '1275px',
      },
      backgroundImage: {
        'desktop-hero': "url('/src/assets/images/desktop/image-host.jpg')",
        'footer-tablet': "url('/src/assets/images/tablet/image-footer.jpg')",
        'footer-mobile': "url('/src/assets/images/mobile/image-footer.jpg')",
      },
      screens: {
        tablet: { max: '768px' },
        iphone: { max: '567px' },
      },
      fontSize: {
        52: '3.25rem',
        18: '1.125rem',
        14: '0.875rem',
        12: '0.75rem',
      },
      lineHeight: {
        62: '3.875rem',
        14: '0.875rem',
      },
    },
  },
  plugins: [],
}

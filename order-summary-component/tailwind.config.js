module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        'light-blue': '#E0E8FF',
        'easy-blue': '#717FA6',
        'deep-blue': '#1F2E55',
        'rise-blue': '#F7F9FF',
        'dark-blue': '#382AE1',
        'light-purple': '#766CF1',
      },
      backgroundImage: {
        'main-pattern-desktop':
          "url('./assets/pattern-background-desktop.svg')",
        'main-pattern-mobile': "url('./assets/pattern-background-mobile.svg')",
      },
      boxShadow: {
        custom: '0px 20px 20px 0px rgba(56, 42, 225, 0.19)',
      },
      screens: {
        sm: '567px',
      },
    },
  },
  plugins: [],
}

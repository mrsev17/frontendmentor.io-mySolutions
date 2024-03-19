module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '567px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1110px',
          xl: '1110px',
        },
      },
    },
  },
  plugins: [],
}

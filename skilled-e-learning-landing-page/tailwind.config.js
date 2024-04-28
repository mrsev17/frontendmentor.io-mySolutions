module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        18: '1.125rem',
      },
      colors: {
        deepDark: '#13183F',
        lilac: '#666CA3',
      },
      borderRadius: {
        btn: '1.75rem',
      },
      backgroundImage: (theme) => ({
        'gradient-btn-banner':
          'linear-gradient(180deg, rgba(255, 111, 72), rgba(240, 42, 166) 100%)',
        'gradient-btn-footer':
          'linear-gradient(180.00deg, rgb(72, 81, 255) -54.317%,rgb(240, 42, 166) 100%);',
      }),
    },
  },
  plugins: [],
}

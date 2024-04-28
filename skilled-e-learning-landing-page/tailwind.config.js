module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        18: '1.125rem',
        24: '1.5rem',
        32: '2rem',
        56: '3.5rem',
      },
      colors: {
        deepDark: '#13183F',
        lilac: '#666CA3',
        lightGrey: '#83869A',
        pink: '#F74780',
        lightPink: '#FFA7C3',
      },
      borderRadius: {
        btn: '1.75rem',
        card: '0.9375rem',
      },
      maxWidth: {
        main: '1440px',
        content: '1110px',
      },
      boxShadow: {
        card: '0px 25px 50px 0px rgba(6, 22, 141, 0.04);',
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

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#202733',
        grayishBlue: '#313A48',
        neonGreen: '#53FFAA',
        lightCyan: '#CEE3E9',
      },
      fontSize: {
        13: '0.8125rem',
        28: '1.75rem',
      },
      borderRadius: {
        15: '0.9375rem',
      },
      boxShadow: {
        custom: '0px 0px 40px 0px rgb(83, 255, 170)',
      },
    },
  },
  plugins: [],
}

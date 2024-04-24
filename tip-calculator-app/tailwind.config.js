module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#C5E4E7',
        inputBg: '#F3F9FA',
        deepGreen: '#00474B',
        lightGreen: '#5E7A7D',
        lightMint: '#26C2AE',

        error: '#E17457',
        sub: '#7F9D9F',
      },
      fontSize: {
        13: '0.8125rem',
        20: '1.25rem',
        24: '1.5rem',
        32: '2rem',
        48: '3rem',
      },
      borderRadius: {
        form: '5px',
        result: '15px',
        mainWrapper: '25px',
      },
      boxShadow: {
        accent: '0px 32px 43px 0px rgba(79, 166, 175, 0.2)',
      },
      screens: {
        lg: '992px',
      },
    },
  },
  plugins: [],
}

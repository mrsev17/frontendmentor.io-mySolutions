/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '540px',
      },
      width: {
        185: '185px',
      },
      maxWidth: {
        350: '350px',
      },
    },
  },
  plugins: [],
}

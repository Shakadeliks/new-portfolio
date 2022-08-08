/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/*.js'
  ],
  theme: {
    extend: {
      colors: {
        main: '#F28705',
        mainDark: '#A60303',
        mainLight: '#F2E63D'
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }

    },
    fontFamily: {
      body: ['Nunito']
    }
  },
  plugins: [],
}

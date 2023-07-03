/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main': 'rgb(190 24 93)',
        'second': 'rgb(147 51 234)'
      },
      colors:{
        'main': 'rgb(190 24 93)',
        'second': 'rgb(147 51 234)'
      }
    },
  },
  plugins: [],
}

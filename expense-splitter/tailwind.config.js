/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blizzard-blue': '#eefafc',
        'primary':'#1D4ED8',
        'secondary': '#2B3674',
      }
    },
  },
  plugins: [],
}

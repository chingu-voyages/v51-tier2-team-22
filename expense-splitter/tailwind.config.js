/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'indigo': '#2B3674',
        'blizzard-blue': '#eefafc',
        'primary':'#1D4ED8',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        cursive: ['Pacifico']
      },
      colors: {
        'primary': '#222E50',
        'secondary': '#E0FBFC'
      }
    }
  },
  plugins: [],
}

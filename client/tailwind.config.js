/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico"],
      },
      colors: {
        primary: "#4e64a3",
        secondary: "#E0FBFC",
        tertiary: "#F25757",
      },
    },
  },
  plugins: [],
};

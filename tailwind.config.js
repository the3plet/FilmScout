/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "nav-text": ["Mukta", "sans-serif"],
        "h1-main": ["Signika", "sans-serif"],
      },
    },
  },
  plugins: [],
};

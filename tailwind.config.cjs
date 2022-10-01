/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Unkempt", "cursive"],
        poorStory: ["Poor Story", "cursive"],
        niramit: ["Niramit", "sans-serif"],
      },
      colors: {
        brand: "#6E8DFD",
        offBrand: "#7E9FFF",
        almostBlack: "#231F20",
        lightBlack: "#555555",
      },
    },
  },
  plugins: [],
};

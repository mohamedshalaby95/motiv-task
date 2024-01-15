/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "100px",
        tablet: "640px",
        laptop: "99999px",
        desktop: "99999px",
      }
     
    },
  },
  plugins: [],
};

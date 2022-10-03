/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
};

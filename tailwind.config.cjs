/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-red-500", "bg-green-500", "bg-orange-500"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
      },
    },
  },
  daisyui: {
    themes: ["business"],
  },
  plugins: [require("daisyui")],
};

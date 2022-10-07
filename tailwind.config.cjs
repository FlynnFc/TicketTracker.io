/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-warning",
    "bg-error",
    "bg-success",
    "border-error",
    "border-success",
    "border-warning",
  ],
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

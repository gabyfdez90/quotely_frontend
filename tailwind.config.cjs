/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      //current: "#2c5530",
      navy: "#2b3a6",
      mustard: "#ffc482",
      green: "#70a9a1",
      brown: "#99621e",
      darkGreen: "#2c5530",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

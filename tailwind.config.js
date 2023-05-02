/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      colors: {
        "dark-brown": "#3D3B3B",
        "light-pink": "#FEEFED",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};

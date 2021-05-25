const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: "Odibee Sans",
      helvetica: ["Helvetica", "Montserrat"],
    },
    extend: {
      colors: {
        primary: "#414b8b",
        secondary: "#ff9a4a",
        white: "#f0f0f0",
        black: "#1a1918",
        grey: "#f3f3f3",
        darkGrey: "#474444",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

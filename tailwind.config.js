const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      },
      maxWidth: {
        screen: `calc(${defaultTheme.screens["xl"]} - 1rem)`,
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        logo: ["Pacifico", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

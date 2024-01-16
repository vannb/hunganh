/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        lg: "0px 8px 16px 0px rgba(171, 190, 209, 0.40)",
      },
      colors: {
        primary: "#2A6BAC",
        silver: "#F5F7FA",
        dark: "#263238",
        blue: "#ABBED1",
        grey: "#4D4D4D",
        black: "#18191F",
        white: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
  
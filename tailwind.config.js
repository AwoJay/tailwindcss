/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
    },
    extend: {
      brightRed: "hsl(12, 88%, 59%)",
      brightRedLight: "hsl(12, 88%, 69%)",
    },
  },
  plugins: [],
};

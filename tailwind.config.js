/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-facebook": "#1877f2",
        "gray-facebook": "#f0f2f5",
      },
      spacing: {
        "500": "580px"
      }
    },
  },
  plugins: [],
};

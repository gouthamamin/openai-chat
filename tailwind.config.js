/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#202123",
        themeBlue: {
          69: "#697ba5",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#202123",
        themeBlue: {
          "69": "#697ba5",
        },
        themeGray: {
          "44": "#444654",
          "8E": "#8E8EA0",
        },
      },
    },
  },
  plugins: [],
};

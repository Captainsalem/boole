/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.hbs", "partials/*.hbs", "partials/members/*.hbs"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#96AFE2",
          50: "#FFFFFF",
          100: "#EEF9FE",
          200: "#CBD0DC",
          300: "#AEB2C5",
          400: "#9597AF",
          500: "#7E7F9C ",
          600: "#696A8B",
          700: "#56587C",
          800: "#43476F ",
          900: "#303763",
          950: "#1D2857",
        },
        secondary: {
          DEFAULT: "#8387ad",
          50: "#FFFFFF",
          100: "#ececf2",
          200: "#d4d5e3",
          300: "#afb1ca",
          400: "#8387ad",
          500: "#636894",
          600: "#4f517a",
          700: "#414363",
          800: "#383954",
          900: "#323348",
          950: "#07070a",
        },
        aspectRatio: {
          '4/3': '4 / 3',
          '5/4': '5 / 4',
        },
        zIndex: {
          '2': '2',
          '1': '1',
          '9': '9'
        },
        rotate: {
          '-220': '-220deg',
          '-155': '-155deg',
          '-147': '-147deg'
        },
        backgroundSize: {
          '2': '2px',
        },
        maxWidth: {
          '41': '41%',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

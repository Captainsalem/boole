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
          100: "#DAE3F5",
          200: "#B7C8EB",
          300: "#96AFE2",
          400: "#7898D8",
          500: "#5B82CE ",
          600: "#416DC5",
          700: "#295ABB",
          800: "#1348B1 ",
          900: "#0038A8",
          950: "#A722FD",
        },
        secondary: {
          DEFAULT: "8387ad",
          50: "#f6f6f9",
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

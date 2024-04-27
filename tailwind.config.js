/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.hbs", "partials/*.hbs", "partials/members/*.hbs"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: 'var(--ghost-accent-color)',
        secondary: 'var(--secondary)'
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

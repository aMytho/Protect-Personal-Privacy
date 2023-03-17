/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'lapis': "#176087"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography') // Improve default text styles.
  ],
}

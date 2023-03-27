/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'lapis': "#176087",
        'metal': "#122C34",
        'indigo': "#224870",
        'martianBlue': "#2A4494",
        "pictonBlue": "#4EA5D9",
        "eggBlue": "#44CFCB"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography') // Improve default text styles.
  ],
}

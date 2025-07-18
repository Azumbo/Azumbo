/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        press: ['var(--font-press-start)'],
      },
      colors: {
        primary: '#facc15', // yellow
        secondary: '#22d3ee', // cyan
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: '#facc15', // yellow
        secondary: '#22d3ee', // cyan
      },
    },
  },
  plugins: [],
};

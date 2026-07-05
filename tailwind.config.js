/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        void: '#050505',
        obsidian: '#0A0A0C',
        charcoal: '#111114',
        champagne: {
          DEFAULT: '#C4A574',
          light: '#D4BC8E',
          muted: '#9A8560',
        },
        platinum: '#A8A9AD',
        ink: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
      },
      borderRadius: {
        squircle: '1.25rem',
        'squircle-lg': '1.75rem',
        'squircle-xl': '2rem',
      },
      letterSpacing: {
        chic: '0.14em',
        display: '-0.03em',
      },
    },
  },
  plugins: [],
};

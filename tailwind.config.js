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
        void: '#faf8f5',
        obsidian: '#f3f0eb',
        charcoal: '#e8e4dd',
        champagne: {
          DEFAULT: '#A67C3D',
          light: '#8B6530',
          muted: '#9A8560',
        },
        platinum: '#6B7280',
        ink: {
          primary: '#1A1A1A',
          secondary: '#5C5C5C',
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

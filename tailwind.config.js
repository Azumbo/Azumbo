/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        obsidian: '#0A0A0C',
        charcoal: '#111114',
        champagne: {
          DEFAULT: '#C4A574',
          light: '#D4BC8E',
          muted: '#9A8560',
        },
        platinum: '#A8A9AD',
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.10)',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
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
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.24), 0 2px 8px rgba(0, 0, 0, 0.12)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.18)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        glow: '0 0 40px rgba(196, 165, 116, 0.12)',
      },
      transitionTimingFunction: {
        fluid: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        glass: '24px',
      },
      letterSpacing: {
        chic: '0.12em',
        wide: '0.2em',
      },
    },
  },
  plugins: [],
};

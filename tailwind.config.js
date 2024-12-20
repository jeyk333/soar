/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        border: 'var(--border)',
        'card-border': 'var(--card-border)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        'text-label': 'var(--text-label)',
        background: 'var(--background)',
        error: 'var(--error)',
        success: 'var(--success)',
      },
      backgroundImage: {
        'card-dark':
          'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'card-dark-footer':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        lato: '"Lato", serif',
      },
    },
  },
  plugins: [],
};

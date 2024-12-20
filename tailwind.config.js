/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
};

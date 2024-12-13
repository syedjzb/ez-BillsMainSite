import { theme } from './src/config/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fonts,
    },
  },
  plugins: [],
};
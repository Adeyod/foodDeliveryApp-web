/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#0C513F',
        // secondary: '#1CA6A6',
      },
    },
  },
  plugins: [],
};

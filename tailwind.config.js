/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF5900',
        },
        black: {
          DEFAULT: '#161718',
        },
        gray: {
          900: '#232525',
          800: '#232525',
        },
      },
    },
  },
  plugins: [],
} 
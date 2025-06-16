/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wordle-correct': '#538d4e',
        'wordle-present': '#b59f3b',
        'wordle-absent': '#3a3a3c',
        'wordle-keyboard': '#818384',
      },
    },
  },
  plugins: [],
} 
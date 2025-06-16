/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'grid-cols-5',
    'grid',
    'gap-2',
    'aspect-square',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'w-full',
    'max-w-[350px]',
    'mx-auto',
    'px-2',
    'border-2',
    'border-gray-500',
    'text-2xl',
    'font-bold',
    'uppercase',
    'text-white',
    'box-border',
    'bg-wordle-correct',
    'bg-wordle-present',
    'bg-wordle-absent',
    'bg-transparent'
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
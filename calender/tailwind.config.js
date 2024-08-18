/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ["Open Sans"]
      },
      gridTemplateColumns : {
        "1/5": "1fr 5fr"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [
    'bg-indigo-500',
    'bg-green-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-blue-500',
    'bg-orange-500',
  ],
}


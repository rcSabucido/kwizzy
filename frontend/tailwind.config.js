/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Boorsok', 'sans-serif'],
        custom2: ['Wedges', 'sans-serif'],  
      }
    },
  },
  plugins: [],
}
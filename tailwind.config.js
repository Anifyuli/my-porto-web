/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

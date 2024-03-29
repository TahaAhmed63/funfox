/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#25A3A1',
        'light-blue': '#A4FDFB',
        'pink': '#FE6784',
        'light-pink': '#FFAEBE',

      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
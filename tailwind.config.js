/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Black": "#1E2832"
      },
      // fontFamily: {
      //   'primary': ['Roboto', 'sans-serif'],
      // }
    },
  },
  plugins: [],
}


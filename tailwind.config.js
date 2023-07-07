/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
      },
      colors: {
        primary: "#3056D3"
      },
    },
  },
  plugins: [],
}


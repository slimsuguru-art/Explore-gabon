/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"]
      },
      colors: {
        brand: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 400: "#34d399", 500: "#10b981", 700: "#065f46", 800: "#064e3b", 900: "#022c22" },
        sand: { 50: "#fdf8ef", 100: "#f7ecd7", 400: "#e3b873", 500: "#d79c4a" }
      },
      boxShadow: { soft: "0 12px 35px rgba(6, 78, 59, .10)", float: "0 18px 55px rgba(2, 6, 23, .16)" }
    }
  },
  plugins: []
};

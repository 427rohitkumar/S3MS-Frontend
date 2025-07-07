/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // ✅ This tells Tailwind to look inside your src/ for class usage
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


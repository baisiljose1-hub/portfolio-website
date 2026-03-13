/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc2626', 
          dark: '#050505', 
        }
      },
      fontFamily: {
        // This applies the new futuristic font to your name
        heading: ['"Bruno Ace SC"', 'sans-serif'], 
        // Keeps Syne for your regular paragraph text so it stays readable
        sans: ['Syne', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
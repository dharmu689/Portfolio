/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#112D4E',
        brandBlue: '#3F72AF',
        brandLight: '#DBE2EF',
        brandBg: '#F9F7F7',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',   // App router
      './pages/**/*.{js,ts,jsx,tsx}', // Pages router
      './components/**/*.{js,ts,jsx,tsx}', // Common components
    ],
    theme: {
      extend: {
        fontFamily: {
            montserrat: ['var(--font-montserrat)', 'sans-serif'],
          }
      },
    },
    plugins: [],
  }
  
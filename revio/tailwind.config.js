/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Playfair Display", "sans-serif"],
        heading: ["Nunito Sans", "sans-serif"],
        sub: ["Mulish", "sans-serif"],
      },
    },
    
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          'background': 'linear-gradient(to right, #3994FF 0%, #0F4AE1 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}


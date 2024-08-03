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
      backdropFilter: {
        'blur-saturate': 'blur(17px) saturate(185%)',
      },
      colors: {
        'white-translucent': 'rgba(255, 255, 255, 0.45)',
        'gray-border': 'rgba(209, 213, 219, 0.3)',
      },
      borderRadius: {
        '12': '12px',
      },
      borderWidth: {
        '1': '1px',
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
        '.backdrop-blur-saturate': {
          'backdrop-filter': 'blur(17px) saturate(185%)',
          '-webkit-backdrop-filter': 'blur(17px) saturate(185%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}


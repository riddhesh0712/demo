/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // fea004
        // ffd60ae37407
        primaryColor: "#614B3E",
        secondaryColor: "#1A1A1D",
        thirtaryColor: "#fff"
      },
      clipPath: {
        'left': 'polygon(0 0, 51% 0, 51% 100%, 0 100%)',
        'right': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
      },
      keyframes: {
        'translate-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'translate-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'translate-up': 'translate-up 0.2s forwards',
        'translate-down': 'translate-down 0.2s forwards',
      },
    },
  },
  plugins: [
    // Tailwind Scrollbar
    require('tailwind-scrollbar'),
  ],
}


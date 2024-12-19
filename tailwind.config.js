/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        arrival: 'moveLeft 60s linear forwards',
      },
      keyframes: {
        moveLeft: {
          '0%': {
            right: '0',
          },
          '100%': {
            right: 'calc(50% + 6px)',
            transform: 'translateX(calc(50%))',
          },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EBDD',
        tan: '#D9C3A5',
        ink: '#3B261D',
        umber: '#6B4A3A',
        accent: {
          DEFAULT: '#D13B53',
          dark: '#B32E46',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', '-apple-system', 'sans-serif'],
        script: ['"Parisienne"', 'cursive'],
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
}

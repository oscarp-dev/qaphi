/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFFFF',
        bone: '#F6F2EB',
        ink: '#151515',
        accent: {
          DEFAULT: '#C2456B',
          dark: '#A03455',
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
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#13183F',
        'light-blue': '#666CA3',
        pink: '#FFA7C3',
        'hot-pink': '#F74780',
        grey: '#83869A',
        white: '#fff',
        'white-blue': '#f0f1ff',
      },
      gradientColorStops: {
        'grad-pink-1': '#F02AA6',
        'grad-pink-2': '#FF6F48',
        'grad-purple-1': '#4851FF',
        'grad-purple-2': '#FF6F48',
      },
      screens: {
        md: '768px',
        lg: '1440px',
      },
      fontFamily: {
        serif: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        hero: [
          '2.5rem',
          {
            lineHeight: '3.15rem',
            fontWeight: 800,
          },
        ],
        'hero-lg': [
          '3.5rem',
          {
            lineHeight: '4.41rem',
            fontWeight: 800,
          },
        ],
      },
    },
  },
  plugins: [],
};

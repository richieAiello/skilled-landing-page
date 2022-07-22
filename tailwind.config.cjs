/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
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
        'grad-pink': '#F02AA6',
        'grad-orange': '#FF6F48',
        'grad-blue': '#4851FF',
      },
      fontFamily: {
        serif: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 25px 50px rgba(6, 22, 141, 0.042)',
      },
    },
  },
  plugins: [],
};

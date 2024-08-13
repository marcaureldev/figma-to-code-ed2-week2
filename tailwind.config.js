/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    borderRadius: {
      '24': '24px',
      '52': '52px',
      '100': '100px',
    },
    extend: {
      fontFamily:{
        'Archivo-Regular': ['Archivo-Regular', 'sans-serif'],
        'Archivo-Semibold': ['Archivo-Semibold', 'sans-serif'],
        'Chillax-Regular': ['Chillax-Regular', 'sans-serif'],
        'Chillax-Bold': ['Chillax-Bold', 'sans-serif'],
        'Chillax-Semibold': ['Chillax-Semibold', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#7E7E7E'
      },
      backgroundImage: {
        'hero-section': "url('/images/hero-section.svg')",
        'tech-mens': "url('/images/tech-mens.svg')",
        'abraham-george': "url('/images/abraham-george.svg')",
      },
      maxWidth: {
        '30': '30em',
        '35': '35em',
        '70': '70em',
      },
      width:{
        '20': '20em',
        '25': '25em',
        '30': '30em',
        '40': '40em',
        '45': '45em',
      },
      height:{
        '30': '30em',
        '25': '25em',
        '50': '50vh',
      },
    },
  },
  plugins: [],
}
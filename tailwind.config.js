/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'main-green': '#6A983C',
        'dark-green': '#46760A',
        'light-green': '#C8DEB3'
      },
    }
  },
  plugins: []
};

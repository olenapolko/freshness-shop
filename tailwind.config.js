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
      boxShadow: {
        'custom-card-shadow':
          '0 -5px 10px -3px rgba(0, 0, 0, 0.05), 0 -2px 4px -2px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
};

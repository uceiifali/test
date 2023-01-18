/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        new: 'rgba(51,87,117,0.05)',
      },
    },
  },
  plugins: [],
};

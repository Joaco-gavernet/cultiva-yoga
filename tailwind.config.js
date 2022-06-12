/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/cultiva-yoga/image/upload/v1655062729/Cultiva%20Yoga/cultiva-hero_sutdht.gif')",
      },
      colors: {
        primary: '#068D9D',
        secondary: '#53599A',
        third: '#6D9DC5'
      },
    },
  },
  plugins: [],
}

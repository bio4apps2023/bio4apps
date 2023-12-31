/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/bg.png')",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        infant: ['var(--font-infant)'],
        jura: ['var(--font-jura)'],
      },
      colors: {
        blue: "#303494"
      }
    },
  },

  plugins: [],
};

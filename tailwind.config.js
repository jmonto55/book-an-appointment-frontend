/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: '#ffb400',
        lime: '#97bf0f',
        limelight: '#96bf01',
        'black-100': '#101010',
        'white-100': '#f5f5f5',
        'gray-100': '#b6b6b6',
      },
      fontFamily: {
        noto: ['Noto Sans Display', 'sans-serif'],
        kaushan: ['Kaushan Script', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      },
      screens: {
        tablet: '1640px',
        xl: '1340px',
      },
    },
  },
  plugins: [],
};

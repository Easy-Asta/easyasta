/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        usaRed: '#B22234',
        usaBlue: '#3C3B6E'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
      borderRadius: {
        xl2: '1rem'
      },
      boxShadow: {
        btn: '0 10px 20px rgba(0,0,0,.15)'
      }
    }
  },
  plugins: []
};

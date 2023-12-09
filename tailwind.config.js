/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      letterSpacing: {
        'spacing-1rem': '1rem'
      },
      backgroundImage: {
        'bg-dark': "url('./images/bg-desktop-dark.jpg')"
      },
      maxWidth: {
        '90-rem': '90rem'
      },
      colors: {
        hsl: {
          '192-100-67': 'hsl(192, 100%, 67%)',
          '280-87-65': 'hsl(280, 87%, 65%)',
          '--Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
          '--dark-greyish-blue': 'hsl(234, 11%, 52%)'
        },

      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      letterSpacing: {
        'spacing-1rem': '1rem'
      },
      backgroundImage: {
        'bg-dark': "url('./images/bg-desktop-dark.jpg')",
        'bg-light': "url('./images/bg-desktop-light.jpg')",
      },
      maxWidth: {
        '90-rem': '90rem'
      },
      colors: {
        hsl: {
          '192-100-67': 'hsl(192, 100%, 67%)',
          '280-87-65': 'hsl(280, 87%, 65%)',
          '--Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
          '--dark-greyish-blue': 'hsl(234, 11%, 52%)',
          '--Very-Dark-Blue': 'hsl(235, 21%, 11%)',
          '--Very-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)',
          '--Light-Grayish-Blue-hover': 'hsl(236, 33%, 92%)',
          '--Light-theme-bg': 'hsl(236, 33%, 92%)',
          '--Light-input-color': 'hsl(0, 0%, 98%)',
          '--VeryLightGrayishBlue': 'hsl(236, 33%, 92%)',
          '--VeryDarkGrayishBlue': 'hsl(235, 19%, 35%)'
        },

      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      minHeight: {
        '75vh': '75vh',
      }
    },
  },
  plugins: [],
};
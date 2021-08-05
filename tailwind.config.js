const colors = require('tailwindcss/colors');
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '982px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        cyan: '#7eeaf2',
        'light-gray': '#ebedf0',
        'faded-white': 'rgba(243, 244, 246, 0.68)',
        'faded-black': 'rgba(7, 0, 1, 0.68)',
        'black-tone': '#070001',
        amber: colors.amber,
        blue: colors.blue,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.coolGray,
        green: colors.green,
        indigo: colors.indigo,
        'light-blue': colors.sky,
        lime: colors.lime,
        orange: {
          ...colors.orange,
          1000: '#4a2008',
        },
        pink: {
          ...colors.pink,
          1000: '#460d25',
        },
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
      },
      fontSize: {
        '10xl': ['10.75rem', 1],
        '26vw': ['26.5vw', 1],
        '22vw': ['22.5vw', 1],
        '12vw': ['12.5vw', 1.1],
        '8vw': ['8.5vw', 1],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            'h2,h3,h4': {
              'scroll-margin-top': spacing['8'],
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

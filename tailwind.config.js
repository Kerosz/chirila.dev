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
        faded: 'rgba(255, 255, 255, 0.78)',
      },
      fontSize: {
        '10xl': ['10.75rem', 1],
        '26vw': ['26.5vw', 1],
        '22vw': ['22.5vw', 1],
        '8vw': ['8.5vw', 1],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

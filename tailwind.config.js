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
      lg: '976px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      '10xl': ['9.7rem', 1],
      '18vw': ['25vw', 1],
    },
    extend: {
      colors: {
        cyan: '#7eeaf2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

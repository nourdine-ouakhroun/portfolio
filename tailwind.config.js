/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#607B96',
        'custom-blue': '#011627',
        'custom-gray': '#1E2D3D',
        'purple': '#4338ca',
        'light-gray': '#607B96',
        'light-green': '#43D9AD',
        'dark-green': '#175553',
        'sunset-orange': '#FEA55F',
        'dark-orange': '#E99287',
        'light-purple': '#5565E8',
        'dark-blue': '#011221',
      },
      rotate: {
        '270': '270deg',
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}


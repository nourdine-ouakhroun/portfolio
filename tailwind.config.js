/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
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
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1728px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3440px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
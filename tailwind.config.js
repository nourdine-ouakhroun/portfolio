/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#607B96',
        'custom-gray': '#1E2D3D',
        'purple': '#4338ca',
      },
      backgroundColor: {
        'custom-blue': '#011627', // Replace 'green' with the actual color
        'custom-gray': '#1E2D3D',
        'sunset-orange': '#FEA55F'
      },
      // animation: {
      //   disparition: 'disparition 1s forwards',
      // },
      // keyframes: {
      //   disparition: {
      //     '0%': { width: '100%' },
      //     '100%': { width: '0%' },
      //   },
      // },
    },
  },
  plugins: [],
}


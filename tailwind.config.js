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
      },
      backgroundColor: {
        'custom-blue': '#011627', // Replace 'green' with the actual color
        'custom-gray': '#1E2D3D',
      }
    },
  },
  plugins: [],
}


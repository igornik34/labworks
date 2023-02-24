/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/**/*.{js,jsx,ts,tsx,php}'],
  theme: {
    extend: {
      keyframes: {
        boom: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        remove: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
      }
  },
  plugins: [],
 }
}

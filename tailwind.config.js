/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        gold: '0 0 10px rgba(250, 204, 21, .55), 0 0 32px rgba(245, 158, 11, .28)',
        blue: '0 0 20px rgba(37, 99, 235, .35)',
      },
      backgroundImage: {
        stadium: 'radial-gradient(circle at 50% -10%, rgba(37,99,235,.46), transparent 34%), linear-gradient(180deg, #04143b 0%, #071a45 42%, #031127 74%, #06170e 100%)',
      },
    },
  },
  plugins: [],
}

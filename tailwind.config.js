/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'netflix' : ['Netflix Sans', 'sans-serif'],
      },
      colors : {
        'fff' : '#fff',
        'drwh' : '#B8B7B7',
        'border' : '#EB3942',
      },
    },
  },
  plugins: [],
}


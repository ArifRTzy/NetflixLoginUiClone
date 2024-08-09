/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx},
            "./Components/**/*.{js,ts,jsx,tsx}",
            "],
  theme: {
    extend: {
      fontFamily : {
        'netflix' : ['netflix sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


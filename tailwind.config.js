/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'netflix' : ['Netflix Sans', 'sans-serif'],
        'arial' : ['Arial',"serif"]
      },
      colors : {
        'fff' : '#fff',
        'drwh' : '#B8B7B7',
        'border' : '#EB3942',
      },
      screens:{
        'xs' : {'max':'600px','min' : '0px'},
        'lgmax' : {'max' : '960px','min':'601px'},
        '2xmax' : {'max' : '1536px'},
        'xlmax' : {'max' : '1280px' , 'min':'961px'}
      }
    },
  },
  plugins: [],
}


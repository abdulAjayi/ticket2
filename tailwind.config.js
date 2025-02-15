/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens:{
          'md':"680px"
        },
        colors:{
          deep:"#02191D",
          deep2:"#052228",
          deep3:"#12464E",
          lighterDeep:"#0E464F",
          lightDeep:"#041E23",
          lightDeep2:"#07373F",
          lightGray:"#D9D9D9",
          lighterLight:"#197686",
          lightWhite:"#FAFAFA",
          halfLight:"#24A0B5",
          deep4:"B3B3B3"
        }
      },
    },
    plugins: [],
  };
  
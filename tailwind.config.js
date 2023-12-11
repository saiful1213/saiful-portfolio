/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      daisyui: {
        themes: [
          // {
          //   mytheme: {
          //     "primary": "#a991f7",
          //     "secondary": "#f6d860",
          //   }
          // },
          // "dark", 
          // "cupcake", 
          "aqua"
        ]
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#F97316",
        secondaryColor: "#00A550"
      },
      fontFamily:{
        poppin: "Poppins"
      }


    },
  },
  plugins: [],
}


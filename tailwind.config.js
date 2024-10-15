/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
      },
      backgroundImage:{
        bgImage: "url(src/assets/bg.png)"
      },
      colors: {
        purple: {
          1: "#653D96ff"
        },
        orange1: {
          1:
            "#F8AC41ff"
        },
        white1: {
          1: "#FFFFFFff"
        },
        darkGreen: {
          1: "#213B44ff",
        },
        pink: {
          1: "#D88DA5ff"
        },
        offWhite: {
          1: "#DACFC7ff",
          2: "#A68C70ff"
        }
      }
    },
  },
  plugins: [

  ],
}


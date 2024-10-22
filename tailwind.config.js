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
        protest: ["Protest Strike", "sans-serif"]
      },
      backgroundImage: {
        bgImage: "url(src/assets/bg.png)",
        bgImage2: "url(src/assets/paws.svg)",
        bgImage3: "url(src/assets/capa.webp)",
        bgImage4: "url(src/assets/capa2.jpg)",
      },
      colors: {
        purple: {
          1: "#653D96ff"
        },
        black:{
          1: "#E8E7E4",
          2:"#050505cc"
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
          2: "#BCB0A7",
          3: "#DACFC7"
        },
      },
      height:{
        h1: "34rem",
        h2: "15rem",
      },
      boxShadow: {
        "3xl":"5px 15px 20px 5px rgba(10, 1, 0, 0.2)",
      },
      screens: {
        "mobileHover": {
          'raw': '(hover:hover)'
        },
      },
    },
    plugins: [

    ],
  }
}

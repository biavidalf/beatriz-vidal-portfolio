/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        bg: {
          main: "#11101B",
          "purple-hover": "#29203E",
          "purple-dark": "#191829",
          "blue-dark": "#1D2434",
          glass: "#1B1527",
        },
        purple: {
          main: "#6C63FF",
        },
        stroke: "#342D45",
      },
      backgroundImage: {
        "bg-mesh": "url('/mesh.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
});

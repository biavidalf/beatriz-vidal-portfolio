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
        "bg-intro": "url('/bg-intro.png')",
        "bg-hero": "url('/bg-hero.svg')",
        "blur-rectangle": "url('/blur-rectangle.svg')",
        "mesh-elipse": "url('/mesh-elipse.svg')"
      },
    },
    animation: {
      'loop-scroll': 'loop-scroll 15s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'slide-right': {
        '100%': { left: '50%' },
      },
      'slide-left': {
        '100%': { left: '0' },
      }
    } 
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require('tailwind-scrollbar'),
  ],
});

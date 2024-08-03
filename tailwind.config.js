import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('https://picsum.photos/2600/1080')",
        hero: "url('https://picsum.photos/580/720')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Mont: ["Montreal", "sans-serif"],
      },
      transitionProperty: {
        width: "width"
      },
      animation: {
        mvdown: "mvdown 2s ease-in-out",
        mvup: "mvup 2s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out"
      },
      keyframes: {
        mvdown: {
          from: {
            transform: "translateY(-2rem)"
          },
          to: {
            transform: "translateY(0rem)"
          }
        },
        mvup: {
          from: {
            transform: "translateY(2rem)"
          },
          to: {
            transform: "translateY(0rem)"
          }
        },
        fadeOut: {
          from: {
            opacity: "1"
          },
          to: {
            opacity: "0"
          }
        }
      }
    },
  },
  plugins: [],
}


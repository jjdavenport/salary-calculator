import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          thumb: "#fff",
          track: "#fff",
        },
      },
      backgroundImage: {
        role: "url('./src/assets/stacked-peaks-haikei-green.png')",
        salary: "url('./src/assets/stacked-waves-haikei-blue.png')",
      },
      fontFamily: {
        custom: ["public sans", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};

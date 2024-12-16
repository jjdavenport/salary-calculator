import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}"],
    extract,
  },
  theme: {
    screens,
    extend: {
      backgroundImage: {
        role: "url('../src/assets/stacked-peaks-haikei-green.png')",
        salary: "url('../src/assets/stacked-waves-haikei-blue.png')",
      },
      fontFamily: {
        custom: ["public sans", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};

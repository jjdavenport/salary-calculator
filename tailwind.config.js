/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        role: "url('./src/assets/stacked-peaks-haikei-green.png')",
        salary: "url('./src/assets/stacked-waves-haikei-blue.png')",
      },
    },
  },
  plugins: [],
};

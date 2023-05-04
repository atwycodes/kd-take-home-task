/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: "320px",
      tablet: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};

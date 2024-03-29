import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
  theme: {
    colors: {
      grey: {
        50: "#B9B9B9",
        200: "#606060",
        400: "#707070",
        600: "#1E1E1E",
      },
      blood: {
        600: "#D90000",
        700: "#510404",
      },
    },
    extend: {},
    darkMode: "class",
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

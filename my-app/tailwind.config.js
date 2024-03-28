import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        200: "#707070",
        300: "#1E1E1E",
      },
      grey: {
        50: "#B9B9B9",
        200: "#606060",
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

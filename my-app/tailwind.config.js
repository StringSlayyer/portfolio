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
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "4rem",
      full: "9999px",
    },
    colors: {
      grey: {
        50: "#E6E6E6",
        100: "#B9B9B9",
        200: "#606060",
        400: "#707070",
        600: "#1E1E1E",
      },
      blood: {
        600: "#D90000",
        700: "#510404",
      },
    },
    extend: {
      backdropBrightness: {
        25: ".25",
        75: ".75",
      },
    },
    darkMode: "class",
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        size150: ["9.4rem", "4.5rem"],
        size72: ["4.5rem", "4.5rem"],
        size40: ["2.5rem", "3rem"],
        size32: ["2rem", "2.25rem"],
        size24: ["1.5rem", "2rem"],
        size18: ["1.125rem", "1.7rem"],
        size16: ["1rem", "1.625rem"],
        size12: ["0.75rem", "0.938rem"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        c_cyan: "rgb(14, 135, 132)",
        c_orange: "rgb(253, 214, 186)",
        c_greyblack: "rgb(51, 61, 75)",
        c_grey: "rgb(131, 136, 143)",
        c_greylight: "rgb(213, 213, 212)",
        c_lcream: "rgb(254, 252, 247)",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        barlowB: ["BarlowBold", "sans-serif"],
        barlowR: ["BarlowRegular", "sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "sans",
        }),
      },
    },
  },
  plugins: [],
};

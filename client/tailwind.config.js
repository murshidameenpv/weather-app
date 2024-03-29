import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {
      colors: {
        black: "#141216",
        gray: "#1D1B1F",
        darkGray: "#1a181c",
        light: "#F7F8EE",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
};

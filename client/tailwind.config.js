import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#eda415",
        navblue: "#003f62",
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
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: "orbit 10s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(140px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(140px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

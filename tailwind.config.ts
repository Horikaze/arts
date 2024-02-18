import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#e1eefb",
      background: "#041421",
      primary: "#87c1ef",
      secondary: "#8d1713",
      accent: "#e3e32f",
    },
  },
  plugins: [],
};
export default config;

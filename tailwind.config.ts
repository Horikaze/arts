import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#fee1f8",
      background: "#0f010d",
      primary: "#fa73e7",
      secondary: "#75a306",
      accent: "#28f72e",
    },
  },
  plugins: [],
};
export default config;

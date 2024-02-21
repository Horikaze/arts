import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'text': '#0d0f0b',
      'background': '#f7f9f6',
      'primary': '#8c9d76',
      'secondary': '#acbec3',
      'accent': '#9396b1',
     }
  },
  plugins: [],
};
export default config;

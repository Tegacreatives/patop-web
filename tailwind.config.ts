import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-1": "url('/assets/bg.jpg')",
        "bg-2": "url('/assets/bg2.jpg')",
        "bg-3": "url('/assets/bg3.jpg')",
        "bg-4": "url('/assets/bg4.jpg')",
        "bg-5": "url('/assets/bg5.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

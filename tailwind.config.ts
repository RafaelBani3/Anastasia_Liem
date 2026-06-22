import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      fold: "360px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: "#0D1B2A",
        slate: "#334155",
        "dusty-rose": "#CDA4A4",
        "bg-accent": "#F7EDEB",
        "bg-base": "#FAFAF9",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        btn: "0.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px rgba(13, 27, 42, 0.06)",
        medium: "0 4px 24px rgba(13, 27, 42, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;

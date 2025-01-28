import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text_style_color:"var(--text)" ,
        button_color:"var(--button)",
        card_style:"var(--card)" ,
      },
      fontFamily:{
        "inter":"inter"
      }
    },
  },
  plugins: [],
} satisfies Config;

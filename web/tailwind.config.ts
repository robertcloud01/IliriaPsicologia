import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Pure White
        foreground: "#2c3e3a", // Darker slate-green/grey for text (High Contrast but soft)
        primary: {
          DEFAULT: "#2c3e3a", // Deep Green/Grey
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e8ebe9", // Soft Grey-Green (The requested "Verde acinzentado suave")
          foreground: "#2c3e3a",
        },
        accent: {
          DEFAULT: "#d4cdc3", // Muted neutral beige/gold (Subtle)
          foreground: "#2c3e3a",
        },
        muted: "#f9f9f9", // Off-white/Ghost white
        surface: "#f2f2f2", // Light grey for cards
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['6.5rem', { lineHeight: '106px', letterSpacing: '-0.02em' }], // Exact match for desk
      },
      spacing: {
        'section-lg': '145.217px',
        'section-sm': '58px',
        'gutter': '5vw', // Fluid gutter
      },
      maxWidth: {
        'fluid': '100%',
      }
    },
  },
  plugins: [],
};
export default config;

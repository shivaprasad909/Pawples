import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#5B2D8E",
          50: "#F3EDF9",
          100: "#E3D1F3",
          200: "#C7A4E7",
          300: "#AB77DB",
          400: "#8F4ACF",
          500: "#5B2D8E",
          600: "#4A2472",
          700: "#391B57",
          800: "#28133B",
          900: "#170A20",
        },
        gold: {
          DEFAULT: "#F5A623",
          50: "#FEF6E8",
          100: "#FDEBC5",
          200: "#FBD78B",
          300: "#F9C350",
          400: "#F5A623",
          500: "#D4890A",
          600: "#A36B08",
          700: "#724B06",
          800: "#412B03",
          900: "#100B01",
        },
        ivory: {
          DEFAULT: "#FDF8F2",
          dark: "#F5EDE0",
        },
        bark: {
          DEFAULT: "#1A1A2E",
          light: "#2D2D4A",
        },
        blush: {
          DEFAULT: "#FFD6C0",
          light: "#FFF0E8",
          dark: "#FFBFA0",
        },
        "plum-light": "#7B3DBE",
        "plum-pale": "#EDE0FF",
        "gold-pale": "#FFF4D6",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pawples-gradient": "linear-gradient(135deg, #5B2D8E 0%, #8F4ACF 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "spin-slow": "spin 2s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

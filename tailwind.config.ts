import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#061B3A",
          50: "#EEF2F8",
          100: "#D8E1EE",
          200: "#A9BAD3",
          300: "#7B92B7",
          400: "#4D6A9B",
          500: "#2A4775",
          600: "#1A3257",
          700: "#0F2547",
          800: "#0A1F3F",
          900: "#061B3A",
          950: "#03102A",
        },
        cobalt: {
          DEFAULT: "#155EEF",
          50: "#EEF4FF",
          100: "#D9E5FF",
          200: "#B6CCFF",
          300: "#85A9FF",
          400: "#5681FB",
          500: "#155EEF",
          600: "#0E47C7",
          700: "#0B379B",
          800: "#0A2E80",
          900: "#0A2769",
        },
        teal: {
          DEFAULT: "#14B8A6",
          50: "#EFFCF9",
          100: "#CFFAF1",
          200: "#A0F2E2",
          300: "#5EE5CC",
          400: "#21D4FD",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
        },
        surface: "#F8FAFC",
        brand: {
          navy:    "#0A2240",
          cyan:    "#00C2D1",
          gray:    "#F6F9FC",
          charcoal:"#1B2430",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(21, 94, 239, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(21, 94, 239, 0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(55% 50% at 50% 0%, rgba(21, 94, 239, 0.08) 0%, rgba(21, 94, 239, 0.03) 50%, rgba(255,255,255,0) 75%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        cardHover:
          "0 2px 4px rgba(15, 23, 42, 0.05), 0 16px 40px rgba(15, 23, 42, 0.10)",
        ring: "0 0 0 1px rgba(21, 94, 239, 0.18)",
        premium: "0 4px 6px -1px rgba(10,34,64,0.05), 0 20px 60px -8px rgba(10,34,64,0.12)",
        float: "0 8px 30px rgba(10,34,64,0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" },
        },
        "dna-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-2.5%, -4%) rotate(2deg)" },
        },
        "dna-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(3%, 3.5%) rotate(-2.5deg)" },
        },
        "dna-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-3.5%, 2.5%) rotate(1.5deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "dna-drift-1": "dna-drift-1 75s ease-in-out infinite",
        "dna-drift-2": "dna-drift-2 95s ease-in-out infinite reverse",
        "dna-drift-3": "dna-drift-3 60s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

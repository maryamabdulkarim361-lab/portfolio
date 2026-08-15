/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0A0A0C",
        surfaceDark: "#0D0F12",
        cyanAccent: "#2FD8FF",
        blueAccent: "#4EA8FF",
        mutedGray: "#9BA1A8",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(47, 216, 255, 0.3)",
        glassHover: "0 8px 32px 0 rgba(47, 216, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
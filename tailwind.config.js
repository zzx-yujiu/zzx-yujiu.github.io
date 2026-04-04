/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        muted: "#1A1A1A",
        mutedForeground: "#737373",
        accent: "#FF3D00",
        accentForeground: "#0A0A0A",
        border: "#262626",
        input: "#1A1A1A",
        card: "#0F0F0F",
        cardForeground: "#FAFAFA",
        ring: "#FF3D00",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        body: ["Newsreader", "serif"],
        label: ["Space Grotesk", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
      },
      letterSpacing: {
        tighter: "-0.06em",
        tight: "-0.04em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
}

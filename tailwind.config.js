/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant, saturated colors for better visibility
        "elevate-blue": "#2563EB", // Brighter blue
        "elevate-purple": "#8B5CF6", // Vibrant purple
        "elevate-pink": "#EC4899", // Bright pink
        "elevate-orange": "#F97316", // Vibrant orange
        "elevate-green": "#10B981", // Bright green
        "elevate-yellow": "#FBBF24", // Bright yellow
        "elevate-red": "#EF4444", // Bright red
        "elevate-teal": "#14B8A6", // Vibrant teal
        "elevate-indigo": "#6366F1", // Bright indigo
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "color-cycle": "colorCycle 10s infinite alternate",
        float: "float 15s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        colorCycle: {
          "0%": { color: "#2563EB" },
          "20%": { color: "#8B5CF6" },
          "40%": { color: "#EC4899" },
          "60%": { color: "#F97316" },
          "80%": { color: "#10B981" },
          "100%": { color: "#6366F1" },
        },
        float: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(10px)" },
          "50%": { transform: "translateY(0px) translateX(20px)" },
          "75%": { transform: "translateY(10px) translateX(10px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
  safelist: [
    // Ensure these classes are always included in the build
    "text-elevate-blue",
    "text-elevate-purple",
    "text-elevate-pink",
    "text-elevate-orange",
    "text-elevate-green",
    "text-elevate-yellow",
    "text-elevate-red",
    "text-elevate-teal",
    "text-elevate-indigo",
    "animate-fade-in",
    "opacity-0",
    "animate-on-scroll",
  ],
};

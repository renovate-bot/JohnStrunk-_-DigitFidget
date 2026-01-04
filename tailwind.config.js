export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // High contrast colors for AAA compliance
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af", // AAA on white
          900: "#1e3a8a", // AAA on white
          950: "#172554",
        },
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};

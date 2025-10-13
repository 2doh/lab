module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Page Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' 또는 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};

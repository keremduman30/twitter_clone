/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extralihght: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        black: "#14171A",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 7s infinite",
        slideDown: "slideDown 0.3s ease-in-out",
        slideUp: "slideUp 0.3s ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

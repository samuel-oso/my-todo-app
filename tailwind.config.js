/** @type {import('tailwindcss').Config} */

const generateSpacingObject = (limit) => {
  const numberObject = {};
  for (let i = 0; i <= limit; i++) {
    numberObject[i] = `${i}px`;
  }
  return numberObject;
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: generateSpacingObject(2000),
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        xl: [
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
          "0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        ],
      },
    },
    colors: {
      transparent: "transparent",
      gray: {
        50: "#F9FAFB",
        200: "#EAECF0",
        600: "#475467",
        700: "#344054",
        900: "#101828",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};

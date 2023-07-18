/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page-components/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    screens: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1280px",
      onlyMobile: { max: "767.8px" },
      onlyTablet: { min: "768px", max: "1279.8px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        tablet: "32px",
      },
    },
  },
  plugins: [],
};

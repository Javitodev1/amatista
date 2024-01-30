/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        raw_white: "#eff2ed",
        midnight_green: {
          DEFAULT: "#003a42",
          900: "#000c0d",
          800: "#00171b",
          700: "#002328",
          600: "#002f35",
          500: "#003a42",
          400: "#00899b",
          300: "#00d7f4",
          200: "#4eeaff",
          100: "#a6f5ff",
        },
        amatist: {
          DEFAULT: "#898ac0",
          900: "#17182b",
          800: "#2e2f56",
          700: "#464781",
          600: "#6061a9",
          500: "#898ac0",
          400: "#a2a3cd",
          300: "#b9bada",
          200: "#d1d1e6",
          100: "#e8e8f3",
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        baby_powder: {
          DEFAULT: "#eff2ed",
          100: "#2e3828",
          200: "#5d6f51",
          300: "#8ca27e",
          400: "#becab6",
          500: "#eff2ed",
          600: "#f2f5f1",
          700: "#f6f7f4",
          800: "#f9faf8",
          900: "#fcfcfb",
        },
        midnight_green: {
          DEFAULT: "#003a42",
          100: "#000c0d",
          200: "#00171b",
          300: "#002328",
          400: "#002f35",
          500: "#003a42",
          600: "#00899b",
          700: "#00d7f4",
          800: "#4eeaff",
          900: "#a6f5ff",
        },
        amatist: {
          DEFAULT: "#898ac0",
          100: "#17182b",
          200: "#2e2f56",
          300: "#464781",
          400: "#6061a9",
          500: "#898ac0",
          600: "#a2a3cd",
          700: "#b9bada",
          800: "#d1d1e6",
          900: "#e8e8f3",
        }
      },
    },
  },
  plugins: [],
};

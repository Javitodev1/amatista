import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        montez: 'Montez',
        lora: '"Lora Variable"',
      },
      animation: {
        'fade-in': 'fade-in 0.1s ease-in',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      colors: {
        raw_white: '#eff2ed',
        amatista: '#9E5C99',
        golden: '#e5ae5e',
        midnight_green: {
          DEFAULT: '#003a42',
          900: '#000c0d',
          800: '#00171b',
          700: '#002328',
          600: '#002f35',
          500: '#003a42',
          400: '#00899b',
          300: '#00d7f4',
          200: '#4eeaff',
          100: '#a6f5ff',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
  },
  plugins: [flowbite],
}

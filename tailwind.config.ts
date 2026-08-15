// tailwind.config.ts
import type { Config } from "tailwindcss";

// Premium nursery color system inspired by nature, plants, and organic beauty.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        leaf: {
          50: '#f2f8f3',
          100: '#e3f0e5',
          200: '#c6dfcb',
          300: '#9fc6a8',
          400: '#75aa82',
          500: '#4f8e61',
          600: '#3f7b52',
          700: '#326442',
          800: '#275136',
          900: '#1a3d26',
          950: '#102719',
        },
        forest: {
          50: '#f2f6f3',
          100: '#e0ebe3',
          200: '#c2d7c9',
          300: '#9cbca6',
          400: '#759d82',
          500: '#548263',
          600: '#3e674b',
          700: '#32533e',
          800: '#2a4333',
          900: '#23372b',
          950: '#131e18',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ece9',
          200: '#d0dad4',
          300: '#afc0b7',
          400: '#89a295',
          500: '#688677',
          600: '#516a5d',
          700: '#43564c',
          800: '#37473f',
          900: '#303b35',
          950: '#19201d',
        },
        cream: {
          50: '#fbfbf9',
          100: '#f4f4f0',
          200: '#ebeae2',
          300: '#dbd8cb',
          400: '#c5c0ad',
          500: '#b0a891',
          600: '#9b9176',
          700: '#827860',
          800: '#6b6351',
          900: '#575143',
        },
        earth: {
          50: '#f8f6f5',
          100: '#eeebea',
          200: '#dcd7d3',
          300: '#c3bab3',
          400: '#a3978d',
          500: '#887a6f',
          600: '#706157',
          700: '#5c4e47',
          800: '#4e443e',
          900: '#423a35',
        },
        gold: {
          50: '#fbf9f4',
          100: '#f5f0e4',
          200: '#eadfca',
          300: '#dcc6a8',
          400: '#cea981',
          500: '#c08f5f',
          600: '#b2774a',
          700: '#955e3e',
          800: '#7b4e37',
          900: '#644130',
        }
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -4px rgba(0, 0, 0, 0.08)',
        'premium': '0 20px 40px -8px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
    },
  },
  plugins: [],
};

export default config;

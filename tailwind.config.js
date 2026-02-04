/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  darkMode: 'class',

  theme: {

    extend: {

      fontFamily: {

        sans: ['Outfit', 'system-ui', 'sans-serif'],

        display: ['Clash Display', 'Outfit', 'sans-serif'],

      },

      colors: {

        // Uniform grayscale palette

        gray: {

          50: '#FAFAFA',

          100: '#F5F5F5',

          200: '#E5E5E5',

          300: '#D4D4D4',

          400: '#A3A3A3',

          500: '#737373',

          600: '#525252',

          700: '#404040',

          800: '#262626',

          900: '#171717',

          950: '#0A0A0A',

        },

        // Pure black for primary theme

        black: {

          DEFAULT: '#000000',

          50: '#0A0A0A',

          100: '#141414',

          200: '#1A1A1A',

          300: '#262626',

          400: '#404040',

          500: '#525252',

          600: '#737373',

          700: '#A3A3A3',

          800: '#D4D4D4',

          900: '#FAFAFA',

        },

        // Simple accent colors

        accent: {

          blue: '#3B82F6',

          cyan: '#06B6D4',

          indigo: '#6366F1',

        },

        // Simple accent colors

        accent: {

          blue: '#3B82F6',

          cyan: '#06B6D4',

          indigo: '#6366F1',

        },

      },

      animation: {

        'fade-in': 'fadeIn 0.6s ease-out forwards',

        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',

        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',

        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',

        'float': 'float 6s ease-in-out infinite',

        'gradient': 'gradient 8s ease infinite',

        'shimmer': 'shimmer 2s linear infinite',

      },

      keyframes: {

        fadeIn: {

          '0%': { opacity: '0' },

          '100%': { opacity: '1' },

        },

        fadeInUp: {

          '0%': { opacity: '0', transform: 'translateY(24px)' },

          '100%': { opacity: '1', transform: 'translateY(0)' },

        },

        fadeInDown: {

          '0%': { opacity: '0', transform: 'translateY(-16px)' },

          '100%': { opacity: '1', transform: 'translateY(0)' },

        },

        scaleIn: {

          '0%': { opacity: '0', transform: 'scale(0.95)' },

          '100%': { opacity: '1', transform: 'scale(1)' },

        },

        float: {

          '0%, 100%': { transform: 'translateY(0)' },

          '50%': { transform: 'translateY(-12px)' },

        },

        gradient: {

          '0%, 100%': { backgroundPosition: '0% 50%' },

          '50%': { backgroundPosition: '100% 50%' },

        },

        shimmer: {

          '0%': { backgroundPosition: '-200% 0' },

          '100%': { backgroundPosition: '200% 0' },

        },

      },

      backgroundSize: {

        '300%': '300%',

      },

      boxShadow: {

        'glow': '0 0 40px -10px rgba(59, 130, 246, 0.4)',

        'glow-lg': '0 0 60px -15px rgba(59, 130, 246, 0.5)',

        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.08)',

        'parallax': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',

        'parallax-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.4)',

      },

      transitionTimingFunction: {

        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',

        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',

        'parallax': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

      },

      transformOrigin: {

        'parallax': 'center center',

      },

    },

  },

  plugins: [],

}


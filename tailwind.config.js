/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D4ED8",
          dark: "#0F3D91",
          secondary: "#2563EB",
          light: "#F8FAFC",
          card: "#FFFFFF",
          success: "#22C55E",
          textPrimary: "#111827",
          textSecondary: "#4B5563",
          border: "#E5E7EB",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(29, 78, 216, 0.25)',
        'glow-lg': '0 0 45px rgba(29, 78, 216, 0.35)',
        'glow-success': '0 0 25px rgba(34, 197, 94, 0.3)',
        'premium': '0 20px 50px -12px rgba(15, 61, 145, 0.12)',
        'card': '0 10px 30px -5px rgba(15, 61, 145, 0.06), 0 0 1px 1px rgba(229, 231, 235, 0.6)',
      },
      borderRadius: {
        '24px': '24px',
        '3xl': '24px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

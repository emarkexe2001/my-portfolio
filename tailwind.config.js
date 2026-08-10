/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(30px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 146, 60, 0.45)' },
          '50%': { boxShadow: '0 0 22px 6px rgba(236, 72, 153, 0.35)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        blob: 'blob 10s infinite ease-in-out',
        'bounce-slow': 'bounceSlow 2s infinite ease-in-out',
        'pop-in': 'popIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'gradient-x': 'gradientX 4s ease infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


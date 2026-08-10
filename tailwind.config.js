/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '9999px',
    },
    extend: {
      colors: {
        ink: '#1A1F47',
        royal: '#143F99',
        periwinkle: '#6170BB',
        cream: '#FCFFDA',
        coral: '#FF594A',
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(30px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'pop-in': 'popIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        marquee: 'marquee 18s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}

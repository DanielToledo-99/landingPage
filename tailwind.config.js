/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006d37',
        'primary-dark': '#005228',
        'primary-light': '#2ecc71',
        'primary-bright': '#4ae183',
        navy: '#1A3A52',
        'navy-dark': '#0F1F3D',
        'navy-mid': '#203243',
        'navy-light': '#43617b',
        surface: '#F8F9FA',
        'surface-low': '#edf4ff',
        'surface-mid': '#e3efff',
        'surface-high': '#d9eaff',
        'text-main': '#091d2e',
        'text-muted': '#43617b',
        'outline': '#6c7b6d',
        'outline-light': '#bbcbbb',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'count-up': 'countUp 0.3s ease',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

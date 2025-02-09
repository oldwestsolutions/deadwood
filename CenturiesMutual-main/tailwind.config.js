module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c4739',
          dark: '#1f332a',
          light: '#3c5b48',
        },
        cream: '#F8F5F0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['pt-serif-pro', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slide-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}; 
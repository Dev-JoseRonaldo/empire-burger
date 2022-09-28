module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      xxl: ['1.375rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.15rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.375rem', { lineHeight: '2.5rem' }],
      '6xl': ['2.5rem', { lineHeight: '3rem' }],
      '7xl': [
        '3rem',
        {
          lineHeight: '3.5rem'
        }
      ]
    },
    extend: {
      fontFamily: {
        sans: 'Lato, sans-serif',
        lilita: 'Lilita One, cursive'
      },
      colors: {
        primary: '#F43127',
        secondary: '#F59A1B',
        white: '#FAE4D0',
        bgWhite: '#FAF3F2',
        black: {},
        text: {
          90: 'rgba(29, 6, 5, 0.9)',
          69: 'rgba(29, 6, 5, 0.69)',
          500: '#635352',
          700: '#34201F'
        }
      },
      borderRadius: {
        10: '10px'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out'
      }
    }
  }
}

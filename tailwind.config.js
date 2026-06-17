export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        restaurant: {
          black: '#050505',
          charcoal: '#0B0B0B',
          surface: '#151515',
          soft: '#1E1E1E',
          orange: '#FF7A1A',
          orangeDark: '#E85D04',
          cream: '#FFF7ED',
          muted: '#A3A3A3',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        button: '999px',
      },
      boxShadow: {
        orangeGlow: '0 0 42px rgba(255, 122, 26, 0.32)',
        cardDark: '0 28px 90px rgba(0, 0, 0, 0.48)',
      },
      backgroundImage: {
        orangeGradient: 'linear-gradient(135deg, #FF7A1A, #E85D04)',
        darkTexture:
          'radial-gradient(circle at top right, rgba(255,122,26,0.14), transparent 32%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.045), transparent 24%)',
      },
    },
  },
}

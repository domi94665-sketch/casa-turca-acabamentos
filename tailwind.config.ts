import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#0f1115',
        midnight: '#050608',
        abyss: '#0b0d10',
        teal: '#1CA7A1',
        gold: '#D4AF37',
        ivory: '#F6F7FB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at top, rgba(28, 167, 161, 0.18), transparent 55%), radial-gradient(circle at bottom, rgba(212, 175, 55, 0.12), transparent 60%)',
      },
      boxShadow: {
        aurora: '0 18px 60px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
};

export default config;

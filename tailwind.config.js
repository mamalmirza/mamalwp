/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Courier New', 'monospace'],
        'retro': ['Press Start 2P', 'cursive'],
      },
      colors: {
        'pixel-black': '#000000',
        'pixel-white': '#FFFFFF',
        'pixel-gray': '#808080',
        'pixel-dark': '#1a1a1a',
        'pixel-accent': '#00FF00',
      },
      animation: {
        'pixel-fade': 'pixelFade 0.5s ease-in-out',
        'pixel-bounce': 'pixelBounce 0.3s ease-in-out',
      },
      keyframes: {
        pixelFade: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pixelBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}

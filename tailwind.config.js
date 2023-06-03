/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alt-steam-button': '#A6CF2B',
        'dark-lime-green': '#95bc1e',
        'mesh-dark': {
          0: '#3C403C',
          1: '#222723',
          2: '#121412',
          3: '#A7B0A0',
        },
        'mesh-light': {
          0: '#FFFFFF',
          1: '#CECECE',
          2: '#CA1733',
        },
      },
      backgroundColor: {
        'jet-black': '#151714',
        'dark-lime-green': '#95bc1e',
        'dark-olive-green': '#3C403C',
        Charcoal: '#222723',
        Goldenrod: '#E5BE49',
        crimson: '#CA1733',
      },
      fill: {
        'dark-olive-green': '#3C403C',
      },
      borderColor: {
        'dark-olive-green': '#3C403C',
      },
      backgroundImage: {
        'green-pattern': 'linear-gradient(to right, #CEFF3A, #A6CF2B)',
        'mesh-skin-gradient':
          'linear-gradient(to bottom right, #292E29, #151716)',
        'steam-button-pattern': 'linear-gradient(to right, #EFC64C, #C1E456)',
        'hero-image': "url('/hero.png')",
        'details-fundo': "url('/details-item.png')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

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
        'mesh-colors': {
          // OBS: Peguei do `Inspect` do Figma do Kauan
          dark: {
            preto: '#121412',
            1: '#A7B0A0',
            3: '#3C403C',
            4: '#222723',
            5: '#3E423A',
            6: '#D0D7CB',
            7: '#5E675E',
            8: '#90988B',
            9: '#E3F1D8',
            10: '#181C19',
            11: '#272E29',
          },
          neutral: {
            0: '#D0D7CB', // Dark - 6
            100: '#E3F1D8', // Dark - 9
            200: '#A7B0A0', // Dark - 1
            300: '#90988B', // Dark - 8
            400: '#5E675E', // Dark - 7
            500: '#3C403C', // Dark - 3
            600: '#3E423A', // Dark - 5
            700: '#272E29', // Dark - 11
            800: '#222723', // Dark - 4
            900: '#181C19', // Dark - 10
            1000: '#121412', // Dark - Preto
          },
          primary: {
            0: '#FCFFF5',
            100: '#F6FEDE',
            200: '#F0FDC8',
            300: '#E9FBB1',
            400: '#E2F99C',
            500: '#DBF688',
            600: '#D3F375',
            700: '#CCEF65',
            800: '#C5EA56',
            900: '#BEE549',
            1000: '#B6DF3E',
            1100: '#AFD734',
            1200: '#A6CF2B',
            1300: '#9EC624',
            1400: '#95BC1E',
            1500: '#8BB119',
            1600: '#81A515',
            1700: '#779912',
            1800: '#6D8C0F',
            1900: '#63800D',
          },
          secondary: {
            0: '#FFFCF5',
            100: '#FEF6DE',
            200: '#FDF0C8',
            300: '#FBE9B1',
            400: '#F9E29C',
            500: '#F6DB88',
            600: '#F3D375',
            700: '#EFCC65',
            800: '#EAC556',
            900: '#E5BE49',
            1000: '#DFB63E',
            1100: '#D7AF34',
            1200: '#CFA62B',
            1300: '#C69E24',
            1400: '#BC951E',
            1500: '#B18B19',
            1600: '#A58115',
            1700: '#997712',
            1800: '#8C6D0F',
            1900: '#80630D',
          },
          rarity: {
            highest: '#1E9A04',
            high: '#59C675',
            medium: '#FADE5E',
            low: '#E84E6A',
            lowest: '#CA1733',
          },
          others: {
            'jet-black': '#151714',
            'dark-lime-green': '#95bc1e',
            'dark-olive-green': '#3C403C',
            charcoal: '#222723',
            goldenrod: '#E5BE49',
            crimson: '#CA1733',
          },
        },
      },
      backgroundImage: {
        // GRADIENTS
        'mesh-gradient-black-pattern':
          'linear-gradient(to bottom right, #292E29, #151716)',
        'mesh-gradient-green-pattern':
          'linear-gradient(to right, #CEFF3A, #A6CF2B)',
        'mesh-gradient-steam-button':
          'linear-gradient(to right, #EFC64C, #C1E456)',

        // IMAGES
        'mesh-image-hero': "url('/hero.png')",
        'mesh-image-details': "url('/details-item.png')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

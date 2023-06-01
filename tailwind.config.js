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
        "alt-steam-button": "#A6CF2B",
        "mesh-dark": {
          "0": "#3C403C",
          "1": "#222723",
          "2": "#121412",
        },
        "mesh-light": {
          "0": "#FFFFFF",
          "1": "#CECECE",
        },
      },
      backgroundColor: {
        "jet-black": '#151714',
        "dark-lime-green": '#95bc1e',
        "dark-olive-green": '#3C403C',
        "Charcoal": '#222723',
        "Goldenrod": '#E5BE49',
        "crimson": '#CA1733',
      },
      backgroundImage: {
        "green-pattern": "linear-gradient(to right, #CEFF3A, #A6CF2B)",
        "steam-button-pattern": "linear-gradient(to right, #EFC64C, #C1E456)",
        "hero-image": "url('/hero.png')",
      }
    },
  },
  plugins: [],
}

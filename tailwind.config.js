/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "jet-black": '#151714',
        "dark-lime-green": '#95bc1e',
        "dark-olive-green": '#3C403C',
        "Charcoal": '#222723',
        "Goldenrod": '#E5BE49',
        "crimson": '#CA1733',
      },
    },
  },
  plugins: [],
}

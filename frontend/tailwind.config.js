/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '#fff',
        'color-primary': '#EE4444',
        'color-secondary': '',
        'color-primary-text': '#000',
        'color-secondary-text': '#fff',
        'color-subtext': '#6b7280 '
      },
      borderRadius: {
        'input': '0.75rem'
      },
      borderColor: {
        'color-input': '#d1d5db'
      },
      borderWidth: {
        'input': '1px'
      },
      padding: {
        'input': '0.7rem 1rem'
      },
      width: {
        'input': '20rem'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-gray-700',
    'to-blue-700',
    'to-green-700',
    /^bg-/,
    /^to-/,
    /^from-/
  ],
}


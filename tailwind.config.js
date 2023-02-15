/** @type {import('tailwindcss').Config} */
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        'explora': "var(--explora-font)",
        'comfortaa': "var(--comfortaa-font)",
      },
    },
    screens: settingsScreens,
    fontSize: settingsFontSizes,
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
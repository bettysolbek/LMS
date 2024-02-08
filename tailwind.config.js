/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
      extend: {
        colors: {
          'primary': '#d6c315',
          'secondary': '#d66215',
          'pp': '#d6ad3c'
        },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  fontFamily: {
    sans: ['Inter', 'Roboto', 'Arial', 'Borels'], // Add Borels to sans-serif stack
    // ... other font families
  },

}


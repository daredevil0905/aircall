/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6498ed"
        }
      },
      maxWidth: {
        "screen": '1680px'
      }
    },
  },
  plugins: [],
}


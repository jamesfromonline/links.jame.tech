/** @type {import('tailwindcss').Config} */


module.exports = {
  // mode: "jit", // enable tailwind just in time
  content: [
    "./*.html",
    "./**/*.html",
    "./src/index.html",
    "./src/*.js",
    "./src/**/*.js"
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ]
}
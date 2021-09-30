const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  mode: "jit",
  prefix: "tw-",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {textColor: ["dark"],
    backgroundColor: ["dark"],},
  },
  plugins: [],
};

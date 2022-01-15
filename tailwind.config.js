module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)" },
  },
  variants: {
    extend: {
      boxShadow: "active",
    },
  },
  plugins: [],
};

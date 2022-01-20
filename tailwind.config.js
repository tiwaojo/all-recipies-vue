module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        "2xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {
      extend: {
        dropShadow: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};

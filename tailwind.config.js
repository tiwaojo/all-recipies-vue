module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        "2xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 35px rgba(104, 121, 143,0.25)",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
      transitionDuration: ["hover", "focus"],
      whiteSpace: ["hover", "focus"],
      maxHeight: ["hover", "focus"],
      zIndex: ["hover", "focus"],
    },
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};

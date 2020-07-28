// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#212121",
        lightBlack: "#323232",
        mainText: "#f8f8f8",
        secondaryText: "#dbe1e8",
        accent: "#14ffec",
        darkAccent: "#0d7377",
        failed: "#f30a49",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};

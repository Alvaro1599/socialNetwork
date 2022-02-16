module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mob: { max: "640px" },
    }, extend: {
      colors: {
        "secondary": "#252329",
        "primary": "#333333",
        "primary-strong": "#0B090C",
        "primary-light": "#3C393F",
        "secondary-light": "#120F13",
        "secondary-low": "#828282",
      }
    },
  },
  plugins: [],
}

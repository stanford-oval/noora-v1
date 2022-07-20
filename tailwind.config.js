module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    ,
    "./src/data/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        noora: {
          primary: {
            main: "#6940b6",
            light: "#7447c9",
            dark: "#5b379e",
            dark1: "#3f2278",
            dark2: "#2c1458",
          },
          secondary: {
            main: "#0d142b",
            bright: "#121c40",
            dark: "#090f29",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};

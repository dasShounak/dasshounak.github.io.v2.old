const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            brand: "#FFCD05",
            bluegray: colors.blueGray,
            yellow: colors.yellow,
            white: colors.white,
            gray: colors.gray,
        },
        extend: {
            gridTemplateColumns: {
                layout: "minmax(auto, 288px) 1fr",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

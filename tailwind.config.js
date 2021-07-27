const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            gridTemplateColumns: {
                layout: "minmax(auto, 288px) 1fr",
            },
            colors: {
                transparent: "transparent",
                brand: "#FFCD05",
                bluegray: colors.blueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

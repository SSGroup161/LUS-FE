/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                belgan: ["Belgan-Aesthetic", "sans-serif"],
                playfair: ["Playfair Display", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [flowbite],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                belgan: ["Belgan-Aesthetic", "sans-serif"],
                playfair: ["Playfair Display", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};

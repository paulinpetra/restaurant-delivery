/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        //"./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")], // ← ADD THIS LINE

    theme: {
        extend: {},
    },
    plugins: [],
}
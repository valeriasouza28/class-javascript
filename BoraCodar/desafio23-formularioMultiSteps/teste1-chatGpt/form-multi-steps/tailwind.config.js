/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--font-ibm-plex-sans-400)",
                sans2: "var(--font-ibm-plex-sans-700)",
                titillium: "var(--font-titillium-web)"
            }
        }
    },
    plugins: []
};

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		({ addUtilities, addComponents, e, prefix, config }) => {
			const newUtilities = {
				".horizontal-tb": {
					writingMode: "horizontal-tb",
				},
				".vertical-rl": {
					writingMode: "vertical-rl",
				},
				".vertical-lr": {
					writingMode: "vertical-lr",
				},
			};
			addUtilities(newUtilities);
		},
	],
	darkMode: "class",
};

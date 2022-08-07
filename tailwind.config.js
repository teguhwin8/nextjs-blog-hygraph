/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};

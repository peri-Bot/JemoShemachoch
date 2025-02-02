module.exports = {
	darkMode: 'class',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
	],
	theme: {
		extend: {
			colors: ({ theme }) => ({
				gruvbox: theme('colors.gruvbox'),
			}),
		}
	}
} 

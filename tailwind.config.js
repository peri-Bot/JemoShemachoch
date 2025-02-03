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
			colors: {
				gruvbox: {
					bg: '#282828',
					bg0_h: '#1d2021',
					bg0: '#282828',
					bg1: '#3c3836',
					bg2: '#504945',
					bg3: '#665c54',
					fg: '#ebdbb2',
					fg0: '#fbf1c7',
					fg1: '#ebdbb2',
					fg2: '#d5c4a1',
					fg3: '#bdae93',
					red: '#fb4934',
					green: '#b8bb26',
					yellow: '#fabd2f',
					blue: '#83a598',
					purple: '#d3869b',
					aqua: '#8ec07c',
					orange: '#fe8019',
				}
			}
		}
	}
} 

const defaultTheme = require('tailwindcss/defaultTheme') // Import default theme
const colors = require('tailwindcss/colors')

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
			fontFamily: {
				// Set 'Inter' as the default sans-serif font
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				// Set 'STIX Two Text' as the serif font
				serif: ['"STIX Two Text"', ...defaultTheme.fontFamily.serif], // Quotes needed for multi-word names
			},
			colors: {
				// Light Theme (Inspired by Zen)
				'light-bg': '#F5F1E9', // Off-white/beige background
				'light-text': '#383838', // Dark grey text
				'light-text-secondary': '#6B7280', // Lighter grey text
				'light-accent': '#fa963e', // Accent color (adjust as needed)
				'light-card-bg': '#FFFFFF', // Card/Button background
				'light-border': '#E5E7EB', // Border color

				// Dark Theme (Inspired by Zen)
				'dark-bg': '#1F1F1F',   // Dark background
				'dark-text': '#EAEAEA', // Light grey text
				'dark-text-secondary': '#9CA3AF', // Darker grey text
				'dark-accent': '#fa963e', // Accent color (adjust as needed)
				'dark-card-bg': '#2A2A2A', // Card/Button background
				'dark-border': '#4B5563', // Border color

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

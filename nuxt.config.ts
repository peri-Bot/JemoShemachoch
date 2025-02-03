// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode'
	],
	components: [
		'~/components/layout',
	],
	i18n: {
		locales: ['en', 'am'],
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
		vueI18n: './i18n.config.ts'
	},
	colorMode: {
		classSuffix: '',
		preference: 'light',
		fallback: 'light'
	},
	tailwindcss: {
		config: {
			content: [],
			theme: {
				extend: {
					colors: {
						gruvbox: {
							dark_hard: '#1d2021',
							dark0: '#282828',
							// ... rest of gruvbox colors from user input
						}
					}
				}
			}
		}
	}
})

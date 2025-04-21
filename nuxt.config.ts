import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	modules: [
		'@nuxtjs/i18n',
		// '@nuxtjs/tailwindcss',
		'@nuxt/ui',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
		'@vueuse/motion/nuxt'
	],
	components: [
		'~/components/layout',
	],

	css: ['~/assets/css/main.css'],

	i18n: {
		locales: [ // Ensure this array is correct
			{ code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
			{ code: 'am', iso: 'am-ET', name: 'አማርኛ', file: 'am.json' }
		],
		lazy: true,
		defaultLocale: 'en',
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		}
	},
	colorMode: {
		classSuffix: '',
		preference: 'system',
		// fallback: 'light',
	},
	googleFonts: {
		families: {
			// Load Inter font with various weights
			Inter: [400, 500, 600, 700],
			// Load STIX Two Text (regular 400 weight is often enough for headings)
			'STIX Two Text': [400, 700], // Added 700 for potential bold serif headings
		},
		display: 'swap', // Use fallback font while loading (good practice)
		prefetch: true,  // Pre-fetch font data
		preconnect: true, // Pre-connect to Google Fonts origin
	},
})

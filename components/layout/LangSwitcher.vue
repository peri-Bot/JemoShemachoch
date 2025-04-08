<template>
	<div class="relative" ref="switcherRef">
		<!-- Icon Button - Now includes text -->
		<button @click="toggleMenu"
			class="flex items-center gap-x-1.5 rounded-full px-3 py-1 {/* Adjusted padding */} text-sm font-medium {/* Consistent text size */} text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg"
			aria-label="Select language" aria-haspopup="true" :aria-expanded="showLanguageMenu">
			<!-- Globe Icon -->
			<Icon name="heroicons:globe-alt-20-solid" class="h-5 w-5 flex-shrink-0" />

			<!-- Current Locale Text -->
			<span>
				{{ locale.toUpperCase() }}
			</span>
		</button>

		<!-- Dropdown Menu (Remains the same) -->
		<transition enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95">
			<div v-if="showLanguageMenu"
				class="absolute right-0 top-full mt-2 w-32 origin-top-right rounded-md bg-light-card-bg dark:bg-dark-card-bg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20 py-1"
				role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
				<button v-for="loc in availableLocales" :key="loc.code" @click="switchLocale(loc.code)"
					:class="[
						'block w-full text-left px-4 py-2 text-sm transition-colors',
						locale === loc.code
							? 'font-semibold text-light-accent dark:text-dark-accent bg-light-border/50 dark:bg-dark-border/50'
							: 'text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border',
					]" role="menuitem" tabindex="-1">
					{{ loc.name }}
				</button>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
// Assuming @nuxt/icon is installed

const { locale, locales, setLocale } = useI18n() // 'locale' holds the current code ('en', 'am')
const showLanguageMenu = ref(false)
const switcherRef = ref(null)

const availableLocales = computed(() => {
	return locales.value.filter(i => typeof i === 'object' && i.code && i.name)
})

const toggleMenu = () => {
	showLanguageMenu.value = !showLanguageMenu.value
}

const switchLocale = async (newLocale) => {
	await setLocale(newLocale)
	showLanguageMenu.value = false
}

const handleClickOutside = (event) => {
	if (switcherRef.value && !switcherRef.value.contains(event.target)) {
		showLanguageMenu.value = false
	}
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside, true)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside, true)
})
</script>

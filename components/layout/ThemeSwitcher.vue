<template>
	<button @click="toggleTheme"
		class="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg"
		aria-label="Toggle theme">
		<!-- Sun Icon -->
		<svg v-if="$colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
			viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05A1 1 0 003.636 6.464l.707.707a1 1 0 001.414-1.414l-.707-.707zM1.3 10.707a1 1 0 011.414 0L4 12.02l-1.293 1.293a1 1 0 11-1.414-1.414l.293-.293-.293-.293a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
				clip-rule="evenodd" />
		</svg>
		<!-- Moon Icon -->
		<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	</button>
</template>

<script setup>
const colorMode = useColorMode()

function toggleTheme() {
	colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
	console.log('colorMode.value: ', colorMode.value)
}
</script>

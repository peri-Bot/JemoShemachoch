<template>
	<div
		class="min-h-screen font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
// No script needed if just using auto-imported components
</script>

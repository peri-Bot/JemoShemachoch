<template>
	<div
		class="min-h-screen font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
		<LampContainer lineWidth="60%" glowHeight="35rem" glowBlur="50px"
			containerClass="absolute inset-x-0 top-[4rem] w-full h-[40rem] z-5 overflow-hidden" />
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

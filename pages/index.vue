<template>
	<div>
		<!-- Pass the reactive glow height (with units) to the LampContainer -->
		<LampContainer lineWidth="55%" glowHeight="30px" />

		<!-- Hero Section (keeps its original animation) -->
		<section v-motion :initial="{ opacity: 0, y: 100 }" :enter="{
			opacity: 1,
			y: 0,
			transition: {
				delay: 800,
				duration: 1000,
				ease: 'ease-out',
			},
		}" class="py-20 md:py-32 text-center relative overflow-hidden">
			<!-- ... rest of the hero section content ... -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-light-bg via-light-bg to-transparent dark:from-dark-bg dark:via-dark-bg dark:to-transparent opacity-50 z-0">
			</div>

			<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				<h1
					class="text-4xl font-serif font-light tracking-tight sm:text-5xl lg:text-6xl text-light-text-secondary dark:text-dark-text-secondary">
					{{ $t('welcome') }}
				</h1>
				<h2
					class="mt-2 text-5xl font-serif font-bold tracking-tight sm:text-6xl lg:text-7xl text-light-text dark:text-dark-text">
					{{ $t('tagline1') }} <span
						class="italic text-light-accent dark:text-dark-accent">{{
							$t('tagline2') }}</span>
				</h2>
				<p
					class="mt-6 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-dark-text-secondary">
					{{ $t('heroSubtitle') }}
				</p>
				<div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
					<NuxtLink to="/join"
						class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-opacity-90 dark:bg-dark-accent dark:hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg transition">
						{{ $t('ctaPrimary') }}
					</NuxtLink>
					<NuxtLink to="/learn-more"
						class="px-8 py-3 border border-light-border dark:border-dark-border text-base font-medium rounded-md text-light-text dark:text-dark-text bg-light-card-bg dark:bg-dark-card-bg hover:bg-light-border dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg transition">
						{{ $t('ctaSecondary') }} <span aria-hidden="true">→</span>
					</NuxtLink>
				</div>
			</div>

			<!-- Optional: Visual Element -->
			<div class="mt-16 md:mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div
					class="aspect-video bg-light-border dark:bg-dark-border rounded-lg shadow-xl flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
					<p>(Placeholder for Website Feature Image/Video)</p>
				</div>
			</div>
		</section>

		<!-- ... Other Sections ... -->
		<section class="py-16 md:py-24 bg-light-card-bg dark:bg-dark-card-bg">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
				<div class="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h3 class="text-xl font-semibold mb-2">Consumer Goods</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Access to essential goods at fair prices through our
							cooperative
							shops.</p>
						<h3 class="text-xl font-semibold mb-2">Savings & Credit</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Opportunities for members to save and access credit
							facilities.
						</p>
						<h3 class="text-xl font-semibold mb-2">Community Projects</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary">
							Initiatives aimed at improving the local community
							infrastructure and well-being.</p>
					</div>
					<div
						class="aspect-video bg-light-border dark:bg-dark-border rounded-lg shadow-lg flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
						<p>(Placeholder for Service Image/Illustration)</p>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script setup>
import { ref } from 'vue'; // Import ref
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Reactive variable to hold the current glow height value (in pixels)
// Default value 480px (equivalent to 30rem if 1rem = 16px)
const currentGlowHeight = ref(480);

// Metadata (optional)
// useHead({ ... })
</script>

<style scoped>
/* Keep existing styles */
/* ... */

/* Style the range slider track/thumb if desired (optional) */
input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #fa963e;
	/* Use accent color */
	cursor: pointer;
	border-radius: 50%;
}

input[type=range]::-moz-range-thumb {
	width: 16px;
	height: 16px;
	background: #fa963e;
	cursor: pointer;
	border-radius: 50%;
	border: none;
	/* Reset default border */
}
</style>

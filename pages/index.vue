<template>
	<div>
		<!-- LampContainer with individual animation (Initial Load) -->
		<LampContainer v-motion :initial="{ opacity: 0, y: -50, filter: 'blur(10px)' }"
			:enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 100, duration: 900, ease: 'easeOut' } }"
			lineWidth="55%" glowHeight="30px" />

		<!-- Hero Section - Individual elements animate on Initial Load -->
		<section class="py-20 md:py-32 text-center relative overflow-hidden">
			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-light-bg via-light-bg to-transparent dark:from-dark-bg dark:via-dark-bg dark:to-transparent opacity-50 z-0">
			</div>

			<!-- Content container -->
			<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				<!-- H1 - Welcome (Initial Load) -->
				<h1 v-motion :initial="{ opacity: 0, x: -50, filter: 'blur(8px)' }"
					:enter="{ opacity: 1, x: 0, filter: 'blur(0px)', transition: { delay: 300, duration: 800, ease: 'easeOut' } }"
					class="text-6xl font-[Junicode] font-light tracking-tight sm:text-4xl lg:text-8xl text-light-text-secondary dark:text-dark-text-secondary">
					{{ $t('welcome') }}
				</h1>

				<!-- H2 - Tagline (Initial Load) -->
				<h2 v-motion :initial="{ opacity: 0, y: 50, filter: 'blur(8px)' }"
					:enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 500, duration: 800, ease: 'easeOut' } }"
					class="mt-2 text-6xl font-[Junicode] italic font-light  tracking-tight sm:text-4xl lg:text-8xl text-light-accent dark:text-dark-accent">
					{{ $t('tagline1') }} <span
						class="not-italic text-light-text-secondary dark:text-dark-text-secondary">{{
							$t('tagline2') }}</span>
				</h2>

				<!-- Paragraph - Subtitle (Initial Load) -->
				<p v-motion :initial="{ opacity: 0, y: 50, filter: 'blur(5px)' }"
					:enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 700, duration: 800, ease: 'easeOut' } }"
					class="mt-6 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-dark-text-secondary">
					{{ $t('heroSubtitle') }}
				</p>

				<!-- Buttons Div (Initial Load) -->
				<div v-motion :initial="{ opacity: 0, y: 50, filter: 'blur(5px)' }"
					:enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 900, duration: 800, ease: 'easeOut' } }"
					class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

			<!-- Optional: Visual Element (Initial Load) -->
			<div v-motion :initial="{ opacity: 0, y: 50 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: 1100, duration: 800, ease: 'easeOut' } }"
				class="mt-16 md:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div
					class="aspect-video bg-light-border dark:bg-dark-border rounded-lg shadow-xl flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
					<p>(Placeholder for Website Feature Image/Video)</p>
				</div>
			</div>

		</section>

		<!-- Services Section - Animate on Scroll -->
		<section class="py-16 md:py-24 bg-light-card-bg dark:bg-dark-card-bg overflow-hidden">
			<!-- Added overflow-hidden -->
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<!-- Section Title - Animate on Scroll -->
				<h2 v-motion :initial="{ opacity: 0, y: 50 }"
					:visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
					class="text-3xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
					Our Services
				</h2>
				<div class="grid md:grid-cols-2 gap-12 items-center">
					<!-- Left Column (Text Content) - Animate on Scroll -->
					<div v-motion :initial="{ opacity: 0, x: -50 }"
						:visible-once="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut', delay: 200 } }">
						<h3
							class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
							Consumer Goods</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Access to essential goods at fair prices through our
							cooperative
							shops.</p>
						<h3
							class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
							Savings & Credit</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Opportunities for members to save and access credit
							facilities.
						</p>
						<h3
							class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
							Community Projects</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary">
							Initiatives aimed at improving the local community
							infrastructure and well-being.</p>
					</div>
					<!-- Right Column (Placeholder Image) - Animate on Scroll -->
					<div v-motion :initial="{ opacity: 0, x: 50 }"
						:visible-once="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut', delay: 400 } }"
						class="aspect-video bg-light-border dark:bg-dark-border rounded-lg shadow-lg flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
						<p>(Placeholder for Service Image/Illustration)</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Add similar :visible-once animations to other sections below the fold -->

	</div>
</template>

<script setup>
import { ref } from 'vue'; // Import ref (already present)
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// No changes needed in the script setup section for this animation logic
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

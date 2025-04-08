<template>
	<div>
		<LampContainer lineWidth="55%" />
		<!-- Hero Section -->
		<section class="py-20 md:py-32 text-center relative overflow-hidden">
			<!-- Optional: Background Gradient or Image -->
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

			<!-- Optional: Visual Element (like the browser mockup) -->
			<div class="mt-16 md:mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div
					class="aspect-video bg-light-border dark:bg-dark-border rounded-lg shadow-xl flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
					<p>(Placeholder for Website Feature Image/Video)</p>
				</div>
			</div>
		</section>

		<!-- Other Sections (Features, Sponsors, etc.) -->
		<!-- Example: Feature Section -->
		<section class="py-16 md:py-24 bg-light-card-bg dark:bg-dark-card-bg">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
				<div class="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h3 class="text-xl font-semibold mb-2">Consumer Goods</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Access to essential goods at fair prices through our cooperative
							shops.</p>
						<h3 class="text-xl font-semibold mb-2">Savings & Credit</h3>
						<p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
							Opportunities for members to save and access credit facilities.
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
// Use useI18n if needed in script, otherwise $t in template is enough
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// You might define page-specific metadata here
// useHead({
//   title: `${t('companyName')} - ${t('tagline1')} ${t('tagline2')}`,
//   meta: [
//     { name: 'description', content: t('heroSubtitle') }
//   ]
// })
</script>

<style scoped>
/* Simple Nav Link Styling (keep from previous version) */
/* Converted Nav Link Styles */

/* Base styles for desktop nav link */
.nav-link {
	padding-left: 0.75rem;
	/* px-3 */
	padding-right: 0.75rem;
	/* px-3 */
	padding-top: 0.5rem;
	/* py-2 */
	padding-bottom: 0.5rem;
	/* py-2 */
	border-radius: 0.375rem;
	/* rounded-md */
	font-size: 0.875rem;
	/* text-sm */
	line-height: 1.25rem;
	/* text-sm */
	font-weight: 500;
	/* font-medium */
	color: var(--color-light-text-secondary);
	/* text-light-text-secondary */
	background-color: transparent;
	/* Default background */
	/* transition-colors equivalent */
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}

/* Hover styles for desktop nav link (light mode) */
.nav-link:hover {
	color: var(--color-light-text);
	/* hover:text-light-text */
	background-color: var(--color-light-border);
	/* hover:bg-light-border */
}

/* Active styles for desktop nav link (light mode) */
/* Note: Applied to elements with BOTH classes */
.nav-link.router-link-exact-active {
	color: var(--color-light-accent);
	/* text-light-accent */
	background-color: var(--color-light-border);
	/* bg-light-border */
}


/* --- Dark Mode Styles --- */

/* Base dark mode styles for desktop nav link */
.dark .nav-link {
	color: var(--color-dark-text-secondary);
	/* dark:text-dark-text-secondary */
}

/* Hover dark mode styles for desktop nav link */
.dark .nav-link:hover {
	color: var(--color-dark-text);
	/* dark:hover:text-dark-text */
	background-color: var(--color-dark-border);
	/* dark:hover:bg-dark-border */
}

/* Active dark mode styles for desktop nav link */
.dark .nav-link.router-link-exact-active {
	color: var(--color-dark-accent);
	/* dark:text-dark-accent */
	background-color: var(--color-dark-border);
	/* dark:bg-dark-border */
}


/* --- Mobile Nav Link Styles --- */

/* Base styles for mobile nav link */
.mobile-nav-link {
	display: block;
	/* block */
	padding-left: 0.75rem;
	/* px-3 */
	padding-right: 0.75rem;
	/* px-3 */
	padding-top: 0.5rem;
	/* py-2 */
	padding-bottom: 0.5rem;
	/* py-2 */
	border-radius: 0.375rem;
	/* rounded-md */
	font-size: 1rem;
	/* text-base */
	line-height: 1.5rem;
	/* text-base */
	font-weight: 500;
	/* font-medium */
	color: var(--color-light-text-secondary);
	/* text-light-text-secondary */
	background-color: transparent;
	/* transition-colors equivalent */
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}

/* Hover styles for mobile nav link (light mode) */
.mobile-nav-link:hover {
	color: var(--color-light-text);
	/* hover:text-light-text */
	background-color: var(--color-light-border);
	/* hover:bg-light-border */
}

/* Active styles for mobile nav link (light mode) */
.mobile-nav-link.router-link-exact-active {
	color: var(--color-light-accent);
	/* text-light-accent */
	background-color: var(--color-light-border);
	/* bg-light-border */
}


/* --- Dark Mode Mobile Styles --- */

/* Base dark mode styles for mobile nav link */
.dark .mobile-nav-link {
	color: var(--color-dark-text-secondary);
	/* dark:text-dark-text-secondary */
}

/* Hover dark mode styles for mobile nav link */
.dark .mobile-nav-link:hover {
	color: var(--color-dark-text);
	/* dark:hover:text-dark-text */
	background-color: var(--color-dark-border);
	/* dark:hover:bg-dark-border */
}

/* Active dark mode styles for mobile nav link */
.dark .mobile-nav-link.router-link-exact-active {
	color: var(--color-dark-accent);
	/* dark:text-dark-accent */
	background-color: var(--color-dark-border);
	/* dark:bg-dark-border */
}
</style>

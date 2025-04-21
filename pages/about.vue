<template>
	<div class="page-container py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text">{{
				$t('about.title') }}</h1>

			<div
				class="prose dark:prose-invert max-w-4xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
				<h2>{{ $t('about.historyTitle') }}</h2>
				<p>{{ $t('about.historyP1') }}</p>
				<p>{{ $t('about.historyP2') }}</p>

				<h2>{{ $t('about.growthTitle') }}</h2>
				<p>{{ $t('about.growthP1') }}</p>

				<h2>{{ $t('about.locationTitle') }}</h2>
				<p>{{ $t('about.locationP1') }}</p>

				<h2>{{ $t('about.focusTitle') }}</h2>
				<p>{{ $t('about.focusP1') }}</p>
				<p>{{ $t('about.focusP2') }}</p>

				<h2>{{ $t('about.structureTitle') }}</h2>
				<p>{{ $t('about.structureP1') }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

useHead({
	title: t('about.title') + ' - ' + t('companyName')
})
</script>

<style scoped>
/* Using prose class for basic styling */
h1,
h2 {
	color: var(--color-light-text);
}

.dark h1,
.dark h2 {
	color: var(--color-dark-text-secondary);
	/* Adjust if needed */
}
</style>

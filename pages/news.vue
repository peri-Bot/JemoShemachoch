<template>
	<div
		class="page-container py-16 md:py-24 bg-light-bg dark:bg-dark-bg min-h-[60vh] flex items-center justify-center">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">{{ $t('news.title') }}
			</h1>
			<p class="text-xl text-light-text-secondary dark:text-dark-text-secondary">{{
				$t('news.comingSoon') }}</p>
			<!-- Optional: Add an icon -->
			<!-- <Icon name="mdi:newspaper-variant-multiple-outline" class="text-6xl mx-auto mt-8 text-light-border dark:text-dark-border" /> -->
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

useHead({
	title: t('news.title') + ' - ' + t('companyName')
})
</script>

<style scoped>
/* Basic styling */
</style>

<template>
	<div class="page-container py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text">{{
				$t('consumerCoops.info.title') }}</h1>

			<div
				class="prose dark:prose-invert max-w-4xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
				<p>{{ $t('consumerCoops.info.p1') }}</p>
				<p>{{ $t('consumerCoops.info.p2') }}</p>
				<p>{{ $t('consumerCoops.info.p3') }}</p>

				<h2>{{ $t('consumerCoops.info.jemmoExampleTitle') }}</h2>
				<p>{{ $t('consumerCoops.info.jemmoExampleP1') }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

useHead({
	title: t('consumerCoops.info.title') + ' - ' + t('companyName')
})
</script>

<style scoped>
h1,
h2 {
	color: var(--color-light-text);
}

.dark h1,
.dark h2 {
	color: var(--color-dark-text-secondary);
}
</style>

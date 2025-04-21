<template>
	<div class="page-container py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text">{{
				$t('consumerCoops.businesses.title') }}</h1>

			<div
				class="prose dark:prose-invert max-w-4xl mx-auto text-light-text-secondary dark:text-dark-text-secondary space-y-6">
				<p>{{ $t('consumerCoops.businesses.intro') }}</p>

				<div>
					<h2>{{ $t('consumerCoops.businesses.retailTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.retailDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.foodTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.foodDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.flourmillTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.flourmillDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.marketTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.marketDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.educationTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.educationDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.parkingTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.parkingDesc') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.businesses.otherSupportTitle') }}</h2>
					<p>{{ $t('consumerCoops.businesses.otherSupportDesc') }}</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

useHead({
	title: t('consumerCoops.businesses.title') + ' - ' + t('companyName')
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

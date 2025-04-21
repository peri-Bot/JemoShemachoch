<template>
	<div class="page-container py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text">{{
				$t('consumerCoops.missionVision.title') }}</h1>

			<div
				class="prose dark:prose-invert max-w-4xl mx-auto text-light-text-secondary dark:text-dark-text-secondary space-y-8">
				<div>
					<h2>{{ $t('consumerCoops.missionVision.visionTitle') }}</h2>
					<p>{{ $t('consumerCoops.missionVision.visionText') }}</p>
				</div>

				<div>
					<h2>{{ $t('consumerCoops.missionVision.missionTitle') }}</h2>
					<!-- Splitting mission into points based on document -->
					<ul>
						<li>{{ $t('consumerCoops.missionVision.missionPoint1') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint2') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint3') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint4') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint5') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint6') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint7') }}</li>
						<li>{{ $t('consumerCoops.missionVision.missionPoint8') }}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

useHead({
	title: t('consumerCoops.missionVision.title') + ' - ' + t('companyName')
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

/* Style list if needed */
ul {
	list-style: disc;
	padding-left: 1.5rem;
}
</style>

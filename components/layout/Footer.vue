<template>
	<!-- Footer: Dark background in Light Mode, Light background in Dark Mode -->
	<footer
		class="bg-dark-bg dark:bg-light-bg text-dark-text-secondary dark:text-light-text-secondary py-12 md:py-16 mt-16 transition-colors duration-300">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<!-- Adjusted Grid: Simplified to 3 relevant columns -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

				<!-- Column 1: Logo, Description & Social -->
				<div class="md:col-span-1">
					<NuxtLink to="/" class="flex items-center gap-2 mb-4">
						<!-- Optional: Add Logo Icon if available -->
						<!-- <Icon name="your-logo-icon" class="h-8 w-auto text-dark-accent dark:text-light-accent" /> -->
						<span
							class="font-bold text-xl text-dark-text-secondary dark:text-light-text-secondary">{{
								$t('companyName')
							}}</span>
					</NuxtLink>
					<!-- Updated Description -->
					<p class="text-sm mb-4">
						{{ $t('footer.description') }}
					</p>
					<!-- Social Links -->
					<div class="flex space-x-4">
						<a href="#" target="_blank" rel="noopener noreferrer"
							class="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors"
							aria-label="Facebook">
							<Icon name="mdi:facebook" class="h-5 w-5" />
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer"
							class="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors"
							aria-label="Telegram">
							<Icon name="mdi:telegram" class="h-5 w-5" />
						</a>
						<!-- Add more social links as needed -->
					</div>
				</div>

				<!-- Column 2: Quick Links -->
				<div>
					<h3
						class="text-sm font-bold text-dark-text-secondary dark:text-light-text-secondary uppercase tracking-wider mb-4">
						{{ $t('footer.quickLinks') }}</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/about" class="footer-link text-sm text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors
">{{ $t('nav.about') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/services" class="footer-link text-sm text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors
">{{
	$t('nav.services') }}</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/news" class="footer-link text-sm text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors
">{{ $t('nav.news') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/consumer-coops/info" class="footer-link text-sm text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors
">{{
	$t('footer.coopInfo') }}</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Column 3: Membership & Legal -->
				<div>
					<h3
						class="text-sm font-semibold text-dark-text-secondary dark:text-light-text-secondary uppercase tracking-wider mb-4">
						{{ $t('footer.connect') }}</h3>
					<ul class="space-y-2">
						<li>
							<!-- Assuming /join is the membership info/application page -->
							<NuxtLink to="/join" class="footer-link">{{
								$t('footer.membership') }}</NuxtLink>
						</li>
						<li>
							<!-- Assuming /contact page exists or will be created -->
							<NuxtLink to="/contact" class="footer-link">{{
								$t('footer.contact') }}</NuxtLink>
						</li>
						<li>
							<!-- Assuming /privacy page exists or will be created -->
							<NuxtLink to="/privacy" class="footer-link">{{
								$t('footer.privacy') }}</NuxtLink>
						</li>
						<!-- Optional: Add Terms link if relevant -->
						<!--
                         <li>
							<NuxtLink to="/terms" class="footer-link">{{ $t('footer.terms') }}</NuxtLink>
						</li>
                        -->
					</ul>
				</div>

			</div>

			<!-- Copyright Section -->
			<div
				class="border-t border-dark-border dark:border-light-border pt-8 text-center text-xs text-dark-text-secondary dark:text-light-text-secondary">
				<!-- Updated Copyright -->
				<p>{{ $t('footer.copyright', {
					year: new Date().getFullYear(), companyName:
						$t('companyName')
				}) }}</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
// Assumes Nuxt Icon is installed
</script>

<style scoped></style>

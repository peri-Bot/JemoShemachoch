<template>
	<footer class="bg-dark-bg dark:bg-opacity-80 text-dark-text-secondary py-12 md:py-16 mt-16">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
				<!-- Column 1: Logo & Description -->
				<div class="md:col-span-2 lg:col-span-1">
					<NuxtLink to="/" class="flex items-center gap-2 mb-4">
						<!-- Replace with your SVG or Image Logo -->
						<svg class="h-8 w-auto text-dark-accent" viewBox="0 0 24 24"
							fill="currentColor">
							<path
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
						</svg>
						<span class="font-semibold text-xl text-dark-text">{{ $t('companyName')
						}}</span>
					</NuxtLink>
					<p class="text-sm"> {{ $t('heroSubtitle') }} </p>
					<!-- Or a shorter footer description -->
					<div class="mt-4 flex space-x-4">
						<!-- Add Social Links Here -->
						<a href="#" class="hover:text-dark-text transition-colors"><span
								class="sr-only">Facebook</span>
							<Icon name="mdi:facebook" class="h-5 w-5" />
						</a>
						<a href="#" class="hover:text-dark-text transition-colors"><span
								class="sr-only">Telegram</span>
							<Icon name="mdi:telegram" class="h-5 w-5" />
						</a>
						<!-- Add more social icons as needed -->
					</div>
				</div>

				<!-- Column 2: Get Started -->
				<div>
					<h3 class="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4">
						{{ $t('footer.getStarted') }}</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/documentation" class="footer-link">{{
								$t('footer.documentation') }}</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/join" class="footer-link">{{
								$t('footer.membership') }}</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/contact" class="footer-link">{{
								$t('footer.contact') }}</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Column 3: Resources -->
				<div>
					<h3 class="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4">
						{{ $t('footer.resources') }}</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/blog" class="footer-link">{{ $t('footer.news') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/projects" class="footer-link">{{
								$t('nav.projects') }}</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/services" class="footer-link">{{
								$t('nav.services') }}</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Column 4: Company -->
				<div>
					<h3 class="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4">
						{{ $t('footer.company') }}</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/about" class="footer-link">{{ $t('nav.about') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/privacy" class="footer-link">{{
								$t('footer.privacy') }}</NuxtLink>
						</li>
						<!-- Add Terms of Service etc. if needed -->
					</ul>
				</div>
			</div>

			<div class="border-t border-dark-border pt-8 text-center text-sm">
				<p>{{ $t('footer.madeWith') }}</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
// Using Nuxt Icon (install if you haven't: bun add @nuxt/icon)
// Or replace <Icon> with SVGs or another icon library
</script>

<style scoped></style>

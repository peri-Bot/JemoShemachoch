<template>
	<header class="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<!-- Logo -->
				<div class="flex-shrink-0">
					<NuxtLink to="/" class="flex items-center gap-2">
						<!-- Replace with your SVG or Image Logo -->
						<svg class="h-8 w-auto text-light-accent dark:text-dark-accent"
							viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
						</svg>
						<span
							class="font-bold text-xl text-light-text-secondary dark:text-dark-text-secondary">{{
								$t('companyName') }}</span>
					</NuxtLink>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
					<NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
						class="nav-link font-semibold px-3 py-2 rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-[#383838] hover:bg-light-border dark:hover:bg-dark-border transition-colors">
						{{ $t(item.name) }}
					</NuxtLink>
				</div>

				<!-- Right side controls -->
				<div class="flex items-center gap-3 md:gap-4">
					<LangSwitcher />
					<ThemeSwitcher />
					<!-- Mobile menu button -->
					<div class="md:hidden">
						<button @click="mobileMenuOpen = true" type="button"
							class="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-accent dark:focus:ring-dark-accent"
							aria-controls="mobile-menu"
							:aria-expanded="mobileMenuOpen.toString()">
							<span class="sr-only">Open main menu</span>
							<!-- Hamburger Icon -->
							<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
								fill="none" viewBox="0 0 24 24" stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round"
									stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>

		<!-- Mobile menu -->
		<!-- Overlay -->
		<div v-show="mobileMenuOpen" @click="mobileMenuOpen = false"
			class="fixed inset-0 bg-black/30 z-30 md:hidden transition-opacity duration-300 ease-in-out"
			:class="mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"></div>

		<!-- Panel -->
		<div id="mobile-menu"
			class="fixed inset-y-0 right-0 z-40 w-full max-w-xs sm:max-w-sm md:w-80 transform bg-light-bg dark:bg-dark-bg shadow-xl transition-transform duration-300 ease-in-out flex flex-col"
			:class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'">

			<!-- Menu Header -->
			<div
				class="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-light-border dark:border-dark-border flex-shrink-0">
				<h2 class="text-lg font-bold text-light-text dark:text-dark-text">Menu</h2>
				<button @click="mobileMenuOpen = false" type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-accent dark:focus:ring-dark-accent">
					<span class="sr-only">Close menu</span>
					<!-- Close Icon -->
					<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Menu Content -->
			<div class="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6">
				<!-- Original Navigation Section -->
				<div class="space-y-2">
					<!-- Use the existing navigation array -->
					<NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
						@click="mobileMenuOpen = false"
						class="mobile-nav-link-styled text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary mb-2 px-3">
						{{ $t(item.name) }}
					</NuxtLink>
				</div>

			</div>
		</div>
	</header>

</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // Optional: if you need t() in script

const mobileMenuOpen = ref(false)

// Kept the original navigation array
const navigation = [
	{ name: 'nav.projects', href: '/projects' },
	{ name: 'nav.services', href: '/services' },
	{ name: 'nav.blog', href: '/blog' },
	{ name: 'nav.about', href: '/about' },
]
</script>

<style></style>

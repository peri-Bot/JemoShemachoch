<template>
	<header class="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg transition-colors duration-300 ">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex-shrink-0">
					<NuxtLink to="/" class="flex items-center gap-2">
						<!-- Replace with your SVG or Image Logo -->
						<!-- <svg class="h-8 w-auto text-light-accent dark:text-dark-accent" -->
						<!-- 	viewBox="0 0 24 24" fill="currentColor"> -->
						<!-- 	<path -->
						<!-- 		d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /> -->
						<!-- </svg> -->
						<span
							class="font-bold text-xl text-light-text-secondary dark:text-dark-text-secondary">{{
								$t('companyName') }}</span>
					</NuxtLink>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
					<!-- Iterate over navigation items -->
					<div v-for="item in navigation" :key="item.name" class="relative"
						@mouseenter="handleMouseEnter(item.name)"
						@mouseleave="handleMouseLeave">

						<!-- Main Navigation Link -->
						<NuxtLink :to="item.href" :class="['nav-link font-semibold px-3 py-2 rounded-md text-sm flex items-center gap-1',
							'text-light-text-secondary dark:text-dark-text-secondary',
							'hover:text-light-text dark:hover:text-dark-text', // Adjusted dark hover text
							'hover:bg-light-border dark:hover:bg-dark-border',
							'transition-colors duration-200',
							// Keep background active if its menu is hovered
							(hoveredMenu === item.name && item.children) ? 'bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text' : ''
						]">
							{{ $t(item.name) }}
							<!-- Chevron Icon if item has children -->
							<svg v-if="item.children && item.children.length > 0"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								fill="currentColor" class="w-4 h-4 opacity-70">
								<path fill-rule="evenodd"
									d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
									clip-rule="evenodd" />
							</svg>
						</NuxtLink>

						<!-- Dropdown Submenu -->
						<transition enter-active-class="transition ease-out duration-100"
							enter-from-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-from-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95">
							<div v-if="hoveredMenu === item.name && item.children && item.children.length > 0"
								class="absolute left-0 mt-2 w-75 origin-top-left rounded-md shadow-lg z-50 bg-light-card-bg dark:bg-dark-card-bg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 border border-light-border dark:border-dark-border">
								<NuxtLink v-for="subItem in item.children"
									:key="subItem.name" :to="subItem.href"
									class="block px-4 py-2 font-semibold text-base text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-150">
									<Icon name="i-lucide-file-text"
										class="size-5 " />
									<span class="px-2">{{
										$t(subItem.name) }}</span>
								</NuxtLink>
							</div>
						</transition>
					</div>
				</div>

				<!-- Right side controls -->
				<div class=" flex items-center gap-3 md:gap-4">
					<LangSwitcher />
					<ThemeSwitcher />
					<!-- Mobile menu button -->
					<div class="md:hidden">
						<button @click="mobileMenuOpen = true" type="button"
							class="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-accent dark:focus:ring-dark-accent"
							aria-controls="mobile-menu"
							:aria-expanded="mobileMenuOpen.toString()">
							<span class="sr-only">Open
								main menu</span>
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

			<!-- Mobile Menu Content -->
			<div class="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6">
				<!-- Updated Navigation Section for Mobile -->
				<div class="space-y-2">
					<template v-for="item in navigation" :key="item.name">
						<!-- If item has no children, render as a simple link -->
						<NuxtLink v-if="!item.children || item.children.length === 0"
							:to="item.href" @click="mobileMenuOpen = false"
							class="mobile-nav-link-styled block text-base font-medium text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent px-3 py-2 rounded-md hover:bg-light-border dark:hover:bg-dark-border">
							{{ $t(item.name) }}
						</NuxtLink>

						<!-- If item has children, render as a heading + sublinks -->
						<div v-else class="py-2">
							<span
								class="block text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary mb-2 px-3">
								{{ $t(item.name) }}
							</span>
							<NuxtLink v-for="subItem in item.children" :key="subItem.name"
								:to="subItem.href" @click="mobileMenuOpen = false"
								class="mobile-nav-link-styled block text-base font-medium text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent pl-6 pr-3 py-2 rounded-md hover:bg-light-border dark:hover:bg-dark-border">
								{{ $t(subItem.name) }}
							</NuxtLink>
						</div>
					</template>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const mobileMenuOpen = ref(false)
const hoveredMenu = ref(null) // Track which menu is currently hovered

// Updated navigation array with children for Projects and Services
const navigation = [
	{
		name: 'nav.consumer co-ops.consumer co-ops',
		href: '/consumer-coops', // Main link (can be '#' if it shouldn't navigate directly)
		children: [
			// Add your specific project sub-items here
			// Ensure you have corresponding entries in your i18n files
			{ name: 'nav.consumer co-ops.info', href: '/consumer-coops/info' },
			{ name: 'nav.consumer co-ops.mission and vision', href: 'consumer-coops/mission-vision' },
			{ name: 'nav.consumer co-ops.businesses and activities', href: 'consumer-coops/businesses-activities' },
		]
	},
	{
		name: 'nav.services',
		href: '/services', // Main link
		children: [
			// Add your specific service sub-items here
			// Ensure you have corresponding entries in your i18n files
			{ name: 'nav.services.consulting', href: '/services/consulting' },
			{ name: 'nav.services.design', href: '/services/design' },
			{ name: 'nav.services.development', href: '/services/development' },
			{ name: 'nav.services.support', href: '/services/support' },
		]
	},
	{ name: 'nav.news', href: '/news' },
	{ name: 'nav.about', href: '/about' },
];

// --- Dropdown Hover Logic ---
let leaveTimeout = null;

const handleMouseEnter = (itemName) => {
	if (leaveTimeout) {
		clearTimeout(leaveTimeout);
		leaveTimeout = null;
	}
	hoveredMenu.value = itemName;
};

const handleMouseLeave = () => {
	// Use a small delay before hiding the menu
	// This helps if the user momentarily moves the cursor off and back on
	leaveTimeout = setTimeout(() => {
		hoveredMenu.value = null;
	}, 100); // Adjust delay (in ms) as needed
};

// --- Cleanup ---
// Optional: Clear timeout on component unmount
import { onUnmounted } from 'vue';
onUnmounted(() => {
	if (leaveTimeout) {
		clearTimeout(leaveTimeout);
	}
});

</script>

<style scoped></style>

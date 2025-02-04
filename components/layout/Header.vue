<template>
	<!-- Navigation -->
	<nav class="bg-[#182127] bborder-b border-white/10 px-6 py-4 relative">
		<div class="nav-gradient"></div>
		<div class="max-w-7xl mx-auto flex items-center justify-between relative z-10">

			<a href="/" class="flex items-center gap-2">
				<span class="font-semibold text-xl">Jemmo</span>
			</a>
			<div class="flex items-center gap-8">
				<div class="hidden md:flex items-center gap-6">
					<a href="#" class="nav-link group relative">
						Projects
						<div class="nav-highlight"></div>
					</a>
					<a href="#" class="nav-link group relative">
						Services
						<div class="nav-highlight"></div>
					</a>
					<a href="#" class="nav-link group relative">
						Blog
						<div class="nav-highlight"></div>
					</a>
					<a href="#" class="nav-link group relative">
						About Us
						<div class="nav-highlight"></div>
					</a>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<button class="p-2 hover:bg-white/10 rounded-full">
				</button>
				<button class="p-2 hover:bg-white/10 rounded-full">
				</button>
			</div>
		</div>


		<!-- Mobile menu -->
		<div class="md:hidden" v-if="isOpen">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<a href="#"
					class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Shops</a>
				<a href="#"
					class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Projects</a>
				<a href="#"
					class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Enterprise</a>
				<a href="#"
					class="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">About</a>
			</div>
		</div>
	</nav>
	<div class="flex">
		<div class="flex-1 bg-gradient-to-tl from-gruvbox-aqua to-[#0e2332]  h-1"> </div>
		<div class="flex-1 bg-gradient-to-tr from-gruvbox-aqua to-[#0e2332]  h-1"> </div>
	</div>
</template>

<style>
.nav-gradient {
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at var(--x, 50%) var(--y, 50%),
			rgba(0, 220, 130, 0.15) 0%,
			rgba(0, 220, 130, 0) 50%);
	opacity: 0;
	transition: opacity 0.3s;
	pointer-events: none;
}

nav:hover .nav-gradient {
	opacity: 1;
}

.nav-link {
	padding: 0.5rem;
	transition: color 0.3s;
}

.nav-highlight {
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
	height: 2px;
	background: #00DC82;
	transform: scaleX(0);
	transition: transform 0.3s;
}

.nav-link:hover .nav-highlight {
	transform: scaleX(1);
}

/* Add this script tag at the end of your app.vue file */
</style>

<script setup>
const isOpen = ref(false)
// Add this code to handle the gradient movement
if (process.client) {
	window.addEventListener('DOMContentLoaded', () => {
		const nav = document.querySelector('nav')
		const gradient = nav.querySelector('.nav-gradient')

		nav.addEventListener('mousemove', (e) => {
			const rect = nav.getBoundingClientRect()
			const x = ((e.clientX - rect.left) / rect.width) * 100
			const y = ((e.clientY - rect.top) / rect.height) * 100

			gradient.style.setProperty('--x', `${x}%`)
			gradient.style.setProperty('--y', `${y}%`)
		})
	})
}
</script>

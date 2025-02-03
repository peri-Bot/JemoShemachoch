<template>
	<div class="min-h-screen bg-[#0e2332] text-white">
		<main class="max-w-7xl mx-auto px-6 py-20 text-center relative">
		</main>

	</div>
</template>

<script setup>
</script>

<style>
.wave {
	background: linear-gradient(90deg, #00DC82 0%, #00DC82 100%);
	mask: url("data:image/svg+xml,%3Csvg width='1728' height='318' viewBox='0 0 1728 318' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1728 0C1728 0 1296 159 864 159C432 159 0 0 0 0V318H1728V0Z' fill='%23020420'/%3E%3C/svg%3E") center/cover;
	animation: wave 8s ease-in-out infinite;
	transform-origin: center;
}

@keyframes wave {

	0%,
	100% {
		transform: translateY(0) scale(1.05);
	}

	50% {
		transform: translateY(20px) scale(1);
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();

// Define the specific colors for each mode
const lightModeGlowColor = '#fa963e'; // Light beige/orange from image
const darkModeGlowColor = '#fa963e';  // Explicit dark mode orange

const props = defineProps({
	// Width of the visible line AND the radial glow base
	lineWidth: { type: String, default: '50%' },
	// Height/Thickness of the visible line
	lineHeight: { type: String, default: '2px' },
	// Vertical size of the lamp glow effect
	glowHeight: { type: String, default: '30rem' }, // e.g., '30rem', '500px'
	// Amount of blur for the lamp glow
	glowBlur: { type: String, default: '40px' }, // e.g., '40px', '3rem'
	// Optional class to pass styles/positioning to the container
	containerClass: { type: String, default: '' },
});

// Computed property to get the CURRENT glow color based on mode
const currentGlowColor = computed(() => {
	return colorMode.value === 'dark' ? darkModeGlowColor : lightModeGlowColor;
});

// --- CSS Variables for Pseudo-element Styling ---
// We pass reactive values into CSS variables so the <style> block can use them
const cssVars = computed(() => ({
	'--current-glow-color': currentGlowColor.value,
	'--line-width': props.lineWidth,
	'--line-height': props.lineHeight,
	'--glow-height': props.glowHeight,
	'--glow-blur': props.glowBlur,
}));

</script>

<template>
	<!-- Apply CSS variables to the root element -->
	<div :class="['relative flex flex-col items-center justify-center overflow-hidden', containerClass]"
		:style="cssVars">
		<!-- Glow Area Container: Holds pseudo-element -->
		<!-- Scale-y can be adjusted or removed for lamp effect -->
		<div
			class="relative flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0 pointer-events-none">
			<!-- The ::after pseudo-element defined in <style> creates the lamp glow -->

			<!-- The Visible Line -->
			<!-- Positioned relative to the wrapper, using CSS vars -->
			<div class="visible-line absolute inset-x-0 top-[var(--line-top-offset, 0px)] mx-auto z-50">
			</div>

			<!-- <!-- Top Masking Layer --> -->
			<!-- <!-- Positioned relative to the wrapper --> -->
			<!-- <div :class="[ -->
			<!-- 	'masking-layer absolute inset-x-0 top-0 w-full z-40', -->
			<!-- 	maskBackgroundClasses // Apply background classes passed via prop -->
			<!-- ]"> -->
			<!-- </div> -->
		</div>
	</div>
</template>

<style scoped>
.visible-line {
	width: var(--line-width);
	height: var(--line-height);
	background-color: var(--current-glow-color);
	/* Adjust top offset if needed, defaults to 0px relative to containerClass positioning */
	/* Example: top: 1rem; */
	translate: 0 -50%;
	/* Center vertically relative to its top position */
}

.masking-layer {
	/* Height determines how much of the glow top is cut off */
	height: 8rem;
	/* Adjust as needed */
	/* Position it slightly above the line's effective position */
	/* translate: 0 -2rem; */
	/* Adjust based on line position & desired cutoff */
}

/* The main lamp glow pseudo-element */
.relative.flex::after {
	content: '';
	position: absolute;
	z-index: 1;
	/* Below line (50) and mask (40) */
	width: var(--line-width);
	/* Base width matches line width */
	height: var(--glow-height);
	/* Use prop for height */
	/* Position below the line area */
	top: 0;
	/* Starts from the top of the container, adjust top offset if needed */
	left: 50%;
	transform: translateX(-50%);
	/* The radial gradient for the lamp effect */
	/* ellipse at top center, goes from glow color to transparent */
	background: radial-gradient(ellipse farthest-side at 50% 0%,
			var(--current-glow-color),
			transparent);
	/* Apply blur using filter */
	filter: blur(var(--glow-blur));
	/* Opacity can be adjusted if needed */
	/* opacity: 0.8; */
}
</style>

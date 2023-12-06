<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import AppLayout from './layouts/AppLayout.vue';
</script>

<template>
	<AppLayout>
		<template v-slot:header>
			<Navbar />
		</template>

		<template v-slot:main><router-view /></template>

		<template v-slot:footer>
			&copy; Lorem, ipsum dolor. {{ new Date().getFullYear() }}
		</template>
	</AppLayout>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

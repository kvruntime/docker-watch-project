<script setup>
import HelloWorld from './components/HelloWorld.vue';
import AppLayout from './layouts/AppLayout.vue';
</script>

<template>
	<v-application>
		<AppLayout>
			<template v-slot:header>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
				<v-app-bar-title>New Application</v-app-bar-title>
			</template>

			<template v-slot:sidebar>
				
			</template>
			<template v-slot:main>
				<v-container fluid>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
						totam assumenda obcaecati, quasi quod recusandae minima nisi
						explicabo, ducimus, laborum minus architecto amet? Corporis suscipit
						nihil ipsum sunt, hic corrupti.
					</p>
					<v-row dense>
						<v-col v-for="n in 8" :key="n" cols="3">
							<v-sheet color="surface-variant-alt" height="96"></v-sheet>
						</v-col>
					</v-row>
				</v-container>
			</template>
		</AppLayout>
	</v-application>
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

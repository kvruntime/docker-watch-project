<script setup></script>

<template>
	<v-layout>
		<header>
			<v-app-bar color="primary" density="compact">
				<slot name="header"></slot>
			</v-app-bar>
		</header>

		<aside>
			<slot name="sidebar"></slot>
		</aside>

		<main>
			<v-main>
				<slot name="main"></slot>
			</v-main>
		</main>

		<footer>
			<slot name="footer">---</slot>
		</footer>
	</v-layout>
</template>

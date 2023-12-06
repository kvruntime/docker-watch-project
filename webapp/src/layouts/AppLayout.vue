<script setup lang="ts"></script>

<template>
	<div>
		<header>
			<slot name="header"></slot>
		</header>

		<main>
			<slot name="main">...</slot>
		</main>

		<footer>
			<slot name="footer"> </slot>
		</footer>
	</div>
</template>

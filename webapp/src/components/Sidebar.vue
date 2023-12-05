<script setup></script>

<template>
	<v-navigation-drawer permanent location="left">
		<template v-slot:prepend>
			<v-list-item
				lines="three"
				prepend-avatar="https://randomuser.me/api/portraits/men/81.jpg"
				title="Jane Smith"
				subtitle="Logged in"
			></v-list-item>
			<v-divider></v-divider>

			<v-list density="compact" nav>
				<v-list-item
					prepend-icon="mdi-home-city"
					title="Home"
					value="home"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-account"
					title="My Account"
					value="account"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-account-group-outline"
					title="Settings"
					value="settings"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-home-city"
					title="Home"
					value="home"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-account"
					title="My Account"
					value="account"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-account-group-outline"
					title="Settings"
					value="settings"
				></v-list-item>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>

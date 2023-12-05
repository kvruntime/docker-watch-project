<script setup></script>

<template>
	<v-layout>
		<header>
			<v-app-bar color="primary" density="compact">
				<slot name="header"></slot>
			</v-app-bar>
		</header>

		<aside>
			<v-navigation-drawer permanent location="left">
				<template v-slot:prepend>
					<v-list-item
						lines="two"
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
							title="Users"
							value="users"
						></v-list-item>
					</v-list>
				</template>
				<slot name="sidebar"></slot>
			</v-navigation-drawer>
		</aside>

		<main>
			<v-main>
				<slot name="main"></slot>
			</v-main>
		</main>
	</v-layout>
</template>

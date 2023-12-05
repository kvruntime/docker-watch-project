import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

createApp(App)
	.use(
		createVuetify({
			components,
			directives,
		}),
	)
	.mount('#app');

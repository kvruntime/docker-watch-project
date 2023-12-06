import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{ path: '/', component: () => import('../pages/HomePage.vue') },
	{ path: '/about', component: () => import('../pages/AboutPage.vue') },
];

let router = createRouter({
	routes,
	history: createWebHashHistory(),
});

export default router;

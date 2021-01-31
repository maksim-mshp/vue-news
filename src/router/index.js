import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/ru",
		name: "RU",
		component: () => import("../views/RU.vue"),
	},
	{
		path: "/",
		name: "redirect",
		component: () => import("../components/Redirect.vue"),
	},
	{
		path: "/usa",
		name: "USA",
		component: () => import("../views/USA.vue"),
	},
	{
		path: "/ua",
		name: "UA",
		component: () => import("../views/UA.vue"),
	},
	{
		path: "/gb",
		name: "GB",
		component: () => import("../views/GB.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

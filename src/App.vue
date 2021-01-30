<template>
	<v-app>
		<v-app-bar app color="orange darken-1" dark>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>Новости</v-toolbar-title>
			<template v-slot:extension>
				<v-tabs align-with-title>
					<v-tab to="/ru">Россия</v-tab>
					<v-tab to="/ua">Украина</v-tab>
					<v-tab to="/usa">США</v-tab>
					<v-tab to="/gb">Великобритания</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>

		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

}
</script>

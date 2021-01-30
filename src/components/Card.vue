<template>
	<v-card class="mx-auto" max-width="400">
		<v-img
			class="white--text align-end"
			height="200px"
			:src="image"
		>
		</v-img>
		<v-card-title>{{title}}</v-card-title>
		<v-card-text class="text--primary body-1">{{description}}</v-card-text>
		<v-card-actions>
			<v-btn color="orange" text :href="source_link">
				Источник: {{source_name}}
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "Card",
	props: ['title', 'description', 'image', 'source_name', 'source_link', 'datetime']
};
</script>

<style scoped>
.v-card {
	margin: 20px 0px;
}

.v-card-subtitle {
	margin: 0;
	padding: 0 16px;
}

a {
  text-decoration: none
}
</style>

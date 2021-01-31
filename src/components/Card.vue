<template>
	<v-card class="mx-auto" max-width="400">
		<div class="parent">
			<div>
				<v-img
					class="white--text align-end"
					height="200px"
					:src="image"
				>
				</v-img>
				<v-card-title>{{ title }}</v-card-title>
				<v-card-text style="padding-bottom: 0;">
					<v-icon>mdi-clock</v-icon> {{ getDate }}
				</v-card-text>
				<v-card-text class="text--primary body-1">{{
					description
				}}</v-card-text>
			</div>
			<div class="buttons">
				<v-card-actions>
					<v-btn color="orange" text :href="source_link">
						Источник: {{ source_name }}
					</v-btn>
				</v-card-actions>
			</div>
		</div>
	</v-card>
</template>

<script>
export default {
	name: "Card",
	props: [
		"title",
		"description",
		"image",
		"source_name",
		"source_link",
		"datetime",
	],
	computed: {
		getDate() {
			let y = this.datetime.slice(0, 4);
			let m = this.datetime.slice(5, 7);
			let d = this.datetime.slice(8, 10);

			let t = this.datetime.slice(11, 16);

			return d + "." + m + "." + y + " " + t;
		},
	},
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
	text-decoration: none;
}
</style>

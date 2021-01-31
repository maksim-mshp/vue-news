<template>
	<div>
		<v-container>
			<v-card
				class="d-flex align-content-space-around flex-wrap"
				flat
				tile

			>
				<Card
                    v-for="item in info"
                    :key="item"


					:title="item.title"
					:description="item.description"
					:image="item.urlToImage"
					:source_name="item.source.name"
					:source_link="item.url"
					:datetime="item.publishedAt"
				></Card>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import Card from "../components/Card";
export default {
    name: "RU",
    data(){
        return {
            info: ''
        }
    },
	components: {
		Card,
	},
	methods: {
		update() {
			this.axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d7f41a32c26b4bbfb596d58b1a54c766").then((response) => {
                this.info = response.data.articles;
                

			});
		},
	},
	mounted() {
		this.update();
	},
};
</script>

<style scoped>
.container {
	max-width: 9999999px;
}
</style>

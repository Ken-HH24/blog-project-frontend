<template>
    <div id="single-blog">
        <app-header></app-header>
        <show-blog v-bind:width="50" v-bind:blog="blog" ref="child"></show-blog>
    </div>
</template>

<script>
import appheader from "./header.vue";
import showBlog from "./showBlog.vue";

export default {
    components: {
        "app-header": appheader,
        "show-blog": showBlog,
    },

    created() {
        let url = "http://localhost:3000/blog/" + this.id;
        this.$axios
            .get(url)
            .then((res) => {
                this.blog = res.data;
            })
            .then(() => {
                this.$refs.child.updateContent();
            });
    },

    data() {
        return {
            id: this.$route.params.id,
            blog: {},
        };
    },
};
</script>

<style scoped>
#single-blog {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
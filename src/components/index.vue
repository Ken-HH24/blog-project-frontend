<template>
    <div id="index">
        <app-header></app-header>
        <div class="body">
            <h1>Welcome {{ user }}</h1>
            <input type="text" v-model="search" placeholder="search blog" />
            <div id="blogs-preview">
                <preview v-for="blog in filterBlogs" v-bind:blog="blog" v-bind:key="blog.id" v-bind:width="50"></preview>
            </div>
        </div>
    </div>
</template>

<script>
import appheader from "./header.vue";
import preview from "./preview.vue";

export default {
    components: {
        "app-header": appheader,
        preview: preview,
    },

    created() {
        this.$axios.get("http://localhost:3000/allBlogs").then((res) => {
            this.blogs = res.data;
        });
    },

    data() {
        return {
            search: "",
            blogs: [],
        };
    },

    computed: {
        filterBlogs: function () {
            return this.blogs.filter((blog) => {
                const search = this.search.toLowerCase();
                return blog.title.toLowerCase().match(this.search);
            });
        },

        user: function(){
            return this.$store.getters.getUser;
        }
    },
};
</script>

<style scoped>
#index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 40%;
    height: 30px;
    padding-left: 10px;
    margin: 20px 0;
}

#blogs-preview {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
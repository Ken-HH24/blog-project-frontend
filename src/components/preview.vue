<template>
    <div id="preview" v-bind:style="{ width: width + '%' }">
        <div id="blog-area">
            <div class="header">
                <router-link v-bind:to="'/blog/' + blog._id" class="link">{{ blog.title }}</router-link>
                <div id="tag-groups">
                    <section v-for="tag in blog.tags">{{ tag }}</section>
                </div>
            </div>
            <div class="body">
                <article>{{ blog.content }}</article>
            </div>
        </div>
        <div id="option">
            <img src="../imgs/delete.png" alt="delete" v-on:click="deleteBlog" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: {
            type: Object,
        },
        width: {
            type: Number,
        },
    },

    methods: {
        deleteBlog: function () {
            const url = "http://localhost:3000/blog/" + this.blog._id;
            this.$axios
                .delete(url)
                .then((res) => {
                    location.reload();
                    // console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },

    data() {
        return {};
    },
};
</script>

<style scoped>
#preview {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 1px #bdc3c7;
    padding: 20px;
    margin: 20px;
}

#blog-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

a {
    text-decoration: none;
}

.link {
    font-size: 28px;
    color: black;
    font: bolder;
    margin-bottom: 5px;
}

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px #bdc3c7;
    align-items: center;
}

#tag-groups {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    margin-right: 40px;
}

section {
    margin: 4px;
    border-radius: 4px;
    font: 10px;
    padding: 5px;
    background: #f1c40f;
}

.body {
    width: 100%;
    margin-top: 20px;
}

img {
    width: 50px;
    height: 50px;
    margin: 20px;
    cursor: pointer;
}
</style>
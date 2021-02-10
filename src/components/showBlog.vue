<template>
    <div id="showBlog" v-bind:style="{ width: width + '%' }">
        <div class="header">
            <h2>{{ blog.title }}</h2>
            <div id="tag-groups">
                <section v-for="tag in blog.tags">{{ tag }}</section>
            </div>
        </div>
        <div class="body">
            <article ref="content"></article>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: {
            type: Object,
            required: true,
        },

        width: {
            type: Number,
        },
    },

    methods: {
        updateContent: function () {
            console.log(this.blog.content);
            this.$refs.content.innerHTML = marked(this.blog.content);
        },
    },
};
</script>

<style scoped>
#showBlog {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
}

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px #bdc3c7;
    align-items: center;
}

h2 {
    font-size: 50px;
    margin-bottom: 10px;
}

#tag-groups {
    display: flex;
    flex-direction: row;
    margin: auto 40px 20px auto;
}

section {
    margin: 4px;
    border-radius: 4px;
    font: 10px;
    background: #f1c40f;
    padding: 5px;
}

.body {
    width: 100%;
    margin-top: 20px;
}

article {
    font-size: 25px;
}
</style>
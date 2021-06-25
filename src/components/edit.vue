<template>
    <div id="edit">
        <div id="edit-area">
            <h1>Edit your blog</h1>
            <label for="title">title: </label>
            <input type="text" name="title" v-model="blog.title" />
            <label for="tags">tags: </label>
            <input type="text" name="tags" v-model="blog.tags" />
            <label for="content">content: </label>
            <textarea name="content" id="content" cols="30" rows="10" v-model="blog.content" v-on:keyup="updateContent"></textarea>
            <div id="submit" v-on:click="submit">submit</div>
        </div>
        <div id="preview-area">
            <h1>preview</h1>
            <h2>{{ blog.title }}</h2>
            <div id="tag-groups" v-if="blog.tags != ''">
                <section v-for="tag in filterTags">{{ tag }}</section>
            </div>
            <article ref="content"></article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: "",
                tags: "",
                content: "",
            },
        };
    },

    methods: {
        updateContent: function () {
            this.$refs.content.innerHTML = marked(this.blog.content);
        },

        submit: function () {
            let tags = this.blog.tags.split("/");
            this.$axios
                .post("http://localhost:3000/addBlog", {
                    blog: {
                        title: this.blog.title,
                        tags: tags,
                        content: this.blog.content,
                    },
                })
                .then((res) => {
                    this.$router.push("/index");
                });
        },
    },

    computed: {
        filterTags: function () {
            return this.blog.tags.split("/");
        },
    },
};
</script>

<style scoped>
#edit {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#edit-area {
    width: 50%;
    margin: 0 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

#preview-area {
    width: 50%;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

label {
    font: 22px bolder;
    margin-bottom: 8px;
}

input {
    margin-bottom: 15px;
    width: 50%;
    height: 30px;
    font-size: 22px;
    padding-left: 10px;
}

textarea {
    margin-bottom: 30px;
    width: 80%;
    height: 400px;
    font-size: 22px;
}

#submit {
    background: #3498db;
    padding: 10px 30px;
    font: 25px bolder;
    color: white;
    cursor: pointer;
}

#tag-groups {
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
</style>
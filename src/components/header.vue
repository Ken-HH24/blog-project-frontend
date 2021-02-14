<template>
    <div id="header">
        <img src="../imgs/home.png" alt="home" v-on:click="home" />
        <img src="../imgs/edit.png" alt="edit" v-on:click="edit" />
        <h1>{{ title }}</h1>
        <img src="../imgs/exit.png" alt="exit" v-on:click="exit" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "vue-blog",
        };
    },

    methods: {
        home: function () {
            this.$router.push("/index");
        },

        edit: function () {
            this.$router.push("/editBlog");
        },

        exit: function () {
            localStorage.removeItem("token");
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
#header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #74b9ff;
}

img {
    width: 40px;
    height: 40px;
    margin: 15px;
    cursor: pointer;
}

img:nth-last-of-type(1) {
    margin-left: auto;
}

h1 {
    color: white;
    margin: auto auto;
    position: absolute;
}
</style>
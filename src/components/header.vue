<template>
    <div id="header">
        <span class="title" @click="home">{{ title }}</span>
        <div class="links">
            <span @click="edit">NewBlog</span>
            <span @click="exit">Exit</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Vue Blog",
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

#header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    width: 100vw;
    box-sizing: border-box;
    font-family: "Quicksand";
    border-bottom: solid 2px #bdc3c7;
}

.title{
    font-size: 50px;
    font: bolder;
    color: #F1356D;
    cursor: pointer;
}

.links{
    margin-left: auto;
    font-size: 25px;
}

.links span{
    margin-left: 30px;
    margin-right: 20px;
    padding: 10px 20px;
    cursor: pointer;
}

.links span:hover{
    color: #e74c3c;
}

.links span:last-of-type{
    background: #f1356d;
    border-radius: 15px;
    color: white;
}

</style>
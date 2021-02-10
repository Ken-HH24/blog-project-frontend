<template>
    <div id="addBlog">
        <app-header></app-header>
        <blog-edit></blog-edit>
    </div>
</template>

<script>
import appheader from "./header.vue";
import edit from "./edit.vue";

export default {
    components: {
        "app-header": appheader,
        "blog-edit": edit,
    },
};
</script>

<style scoped>
#addBlog {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
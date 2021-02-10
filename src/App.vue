<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import appheader from './components/header.vue';
import preview from './components/preview.vue';
import edit from './components/edit.vue'
import showBlog from './components/showBlog.vue'

export default {
    components: {
        'app-header': appheader,
        'preview': preview,
        'edit': edit,
        'show-blog': showBlog,
    },

    data() {
        return {};
    },

    methods: {},
};
</script>

<style scoped>
</style>

import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import singleBlog from '../components/singleBlog.vue'
import editBlog from '../components/editBlog.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/blog/:id',
      component: singleBlog,
    },
    {
      path: '/editBlog',
      component: editBlog,
    }
  ]
})

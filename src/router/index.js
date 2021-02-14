import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import singleBlog from '../components/singleBlogPage.vue'
import editBlog from '../components/editBlogPage.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
    },
    {
      path: '/blog/:id',
      component: singleBlog,
    },
    {
      path: '/editBlog',
      component: editBlog,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/',
      component: login,
    },
    {
      path: '/register',
      component: register,
    }
  ]
})

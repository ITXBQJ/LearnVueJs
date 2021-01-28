import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ],
  mode:'history',
  linkActiveClass:'active'
})

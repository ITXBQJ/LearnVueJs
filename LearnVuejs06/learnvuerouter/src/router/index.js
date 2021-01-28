import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessges = () => import('../components/HomeMessges.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

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
      component: Home,
      children:[
        {
          path: '',
          redirect:'news'
        },
        {
          path: 'news',
          component: HomeNews,
        },
        {
          path: 'messges',
          component: HomeMessges,
        }
      ]
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
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },
  ],
  mode:'history',
  linkActiveClass:'active'
})

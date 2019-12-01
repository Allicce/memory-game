import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import GameScreen from '../views/GameScreen'
import WelcomePage from '../views/WelcomePage'
import UsersResults from '../views/UsersResults'
import ContactUs from '../views/ContactUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcomePage',
    component: WelcomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/gameScreen',
    name: 'gameScreen',
    component: GameScreen
  },
  {
    path: '/gameScreen/usersResults',
    name: 'usersResults',
    component: UsersResults
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: ContactUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

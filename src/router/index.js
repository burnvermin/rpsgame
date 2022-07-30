import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../components/WelcomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/game',
    name: 'findgame',
    props: true,
    beforeEnter: (to, from, next) => {
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FindGame.vue')
  },
  {
    path: '/',
    name: 'playGame',
    component: () => import('../views/PlayGame.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

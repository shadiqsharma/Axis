import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index9.vue')
  },
  {
    path: "/login",
    name: "Login page",
    component: () => import('../views/login.vue')
  },
  {
    path: "/register",
    name: "Signup page",
    component: () => import('../views/signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password page',
    component: () => import('../views/forgot-password.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

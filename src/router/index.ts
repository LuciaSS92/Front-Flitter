import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from "../components/ResetPassword.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/forgot',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/reset/:token',
    name: 'reset-password',
    component: ResetPassword
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

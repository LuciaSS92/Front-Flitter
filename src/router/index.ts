import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from "../components/ResetPassword.vue"
import FeedView from '../views/FeedView.vue';

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
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpView.vue"),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  },
  
  {
    path: '/feed',
    name: 'feed',
    component: FeedView,
  },
  {
    path: '/for-you',
    name: 'for-you',

    component: () => import(/* webpackChunkName: "for-you" */ '../views/PrivateFeedView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import ResetPassword from "../components/ResetPassword.vue";
import FeedView from "../views/FeedView.vue";
import haveRoleGuard from "./role-guard";
import SelectedUserView from "@/views/SelectedUserView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/forgot",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: '/reset/:token',
    name: 'reset-password',
    component: ResetPassword,
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: SelectedUserView,
  },
  {
    path: "/profile/:userName",
    name: "user-profile",
    component: SelectedUserView,
  },    
  {
    path: '/for-you',
    name: 'for-you',
    beforeEnter: haveRoleGuard,
    component: () => import(/* webpackChunkName: "for-you" */ '../views/PrivateFeedView.vue')
  },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: "NotFound"*/ "../views/NotFoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

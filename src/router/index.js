import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/register",
      component: () => import("@/pages/register.vue"),
    },
    {
      path: "/login",
      component: () => import("@/pages/login.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/pages/dashboard.vue"),
    },
  ],
});

export default router;

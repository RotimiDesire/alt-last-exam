import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import BlogView from "../views/BlogView.vue";
import AccessView from "../views/AccessView.vue";
import ErrorView from "../views/ErrorView.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/access",
    name: "access",
    component: AccessView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/access" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/access");
    return;
  }

  next();
});

export default router;

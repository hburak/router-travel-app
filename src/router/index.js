import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  /* Lazy Loading the components below 
  with webpacks code splitting feature */
  {
    path: "/destinations/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import("../views/DestinationDetails.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () => import("../views/ExperienceDetails.vue"),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    },
  },
  {
    path: "/user",
    name: "User",
    props: true,
    component: () => import("../views/User.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    props: true,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: () => import("../views/Invoices.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */
        "../views/NotFound"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //need to login
    if (!store.user) {
      next({
        name: "Login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;

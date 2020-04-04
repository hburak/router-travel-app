import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  /* Lazy Loading the components below 
  with webpacks code splitting feature */
  {
    path: "/brazil",
    name: "Brazil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
  },
  {
    path: "/details",
    name: "DestinationDetails",
    component: () => import("../views/DestinationDetails.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

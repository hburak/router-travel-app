import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  /* Lazy Loading the components below 
  with webpacks code splitting feature */
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import("../views/DestinationDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

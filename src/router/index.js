import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Prices from "../components/Prices.vue";
import Contact from "../components/Contact.vue";


Vue.use(VueRouter);

const routes = [
    {
      path: '/header',
      name: "header",
      component: Header
    },
    {
      path: '/about',
      name: "about",
      component: About
    },
    {
      path: "/prices",
      name: "prices",
      component: Prices
    },
    {
      path: '/contact',
      name:"contact",
      component: Contact
    }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  base: process.env.BASE_URL,
  routes
});

export default router;

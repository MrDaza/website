import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "@/views/NotFound";
import Home from "@/views/Home";
import Notices from "@/views/Notices";
import About from "@/views/About";
import Team from "@/views/Team";
import Maps from "@/views/Maps";

import Proposes from "@/views/Proposes";
import Article01 from "@/views/proposes/Article01";
import Article02 from "@/views/proposes/Article02";
import Article03 from "@/views/proposes/Article03";
import Article04 from "@/views/proposes/Article04";

import Contribution from "@/views/Contribution";

Vue.use(VueRouter);

const routes = [
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps
  },
  {
    path: "/notices",
    name: "Notices",
    component: Notices
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/proposes/novel_coronavirus",
    name: "Article01",
    component: Article01
  },
  {
    path: "/proposes/app_covid19",
    name: "Article02",
    component: Article02
  },
  {
    path: "/proposes/novel_causal_analysis",
    name: "Article03",
    component: Article03
  },
  {
    path: "/proposes/visual_dashboard",
    name: "Article04",
    component: Article04
  },
  {
    path: "/proposes",
    name: "Proposes",
    component: Proposes
  },
  {
    path: "/contribution",
    name: "Contribution",
    component: Contribution
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "text-secondary",
  linkExactActiveClass: ""
});

/*
router.beforeEach((to, from, next) => {
  //https://router.vuejs.org/guide/advanced/meta.html
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    next("/");
  } else if (requiresAuth) {
    next();
  } else {
    next();
  }
});
*/
export default router;

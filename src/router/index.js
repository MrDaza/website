import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Team from "@/views/Team.vue";

import Proposes from "@/views/Proposes.vue";
import Article01 from "@/views/Article01.vue";
import Article02 from "@/views/Article02.vue";
import Article03 from "@/views/Article03.vue";
import Article04 from "@/views/Article04.vue";

import Contribution from "@/views/Contribution.vue";

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
  linkActiveClass: "active-secondary",
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

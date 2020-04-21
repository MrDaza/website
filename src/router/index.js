import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Team from "@/views/Team.vue";
import Proposes from "@/views/Proposes.vue";
import Contribution from "@/views/Contribution.vue";

Vue.use(VueRouter);

const routes = [
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

export default router;

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import BingoMain from "../components/bingo/BingoMain.vue";
import BingoCard from "../components/bingo/BingoCard.vue";
import BingoDraw from "../components/bingo/BingoDraw.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bingo",
    name: "Bingo",
    component: BingoMain,
  },
  {
    path: "/bingo/card",
    name: "BingoCard",
    component: BingoCard,
  },
  {
    path: "/bingo/draw",
    name: "BingoDraw",
    component: BingoDraw,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

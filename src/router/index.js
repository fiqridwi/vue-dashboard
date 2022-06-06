import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import DashboardChart from "../components/Dashboard/DashboardChart.vue";
import DashboardTable from "../components/Dashboard/DashboardTable.vue";
import DashboardMap from "../components/Dashboard/DashboardMap.vue";
import DashboardUser from "../components/Dashboard/DashboardUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    children: [
      {
        path: "table",
        component: DashboardTable,
      },
      {
        path: "chart",
        component: DashboardChart,
      },
      {
        path: "users",
        component: DashboardUser,
      },
      {
        path: "map",
        component: DashboardMap,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

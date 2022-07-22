import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import DashboardChart from "../components/Dashboard/DashboardChart.vue";
import DashboardTable from "../components/Dashboard/DashboardTable.vue";
import DashboardMap from "../components/Dashboard/DashboardMap.vue";
import DashboardUser from "../components/Dashboard/DashboardUser.vue";
import TablePotensiDesa from "../views/TablePotensiDesa.vue";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "dashboard",
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
          {
            path: "podes",
            component: TablePotensiDesa,
          },
        ],
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

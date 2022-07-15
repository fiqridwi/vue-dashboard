import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import VueI18n from "vue-i18n";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.use(VueI18n);

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;

  next();
});

// router.afterEach(() => {
//   location.reload();
// });

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

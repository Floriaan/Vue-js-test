import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./config/router";
import retrieveToken from "@/helpers/retrieveToken";

require("@/assets/scss/_index.scss");

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (retrieveToken()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    if (retrieveToken()) {
      next({
        name: "Contact",
      });
    } else {
      next();
    }
  }
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

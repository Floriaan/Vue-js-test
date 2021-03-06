import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Login";
import Contact from "@/pages/Contact";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "*", redirect: "/login" },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
      meta: { requiresAuth: true },
      // beforeEnter: (to, from, next) => {
      //   return next();
      // },
    },
  ],
});

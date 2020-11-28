import Vue from "vue";
import VueRouter from "vue-router";
import vueRouter from "vue-router";
import Home from "@views/Home";
import Login from "@views/Login";
import Register from "@views/Register";
import Search from "@views/Search";

Vue.use(vueRouter);
const push = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  return push.replace.call(this, location, onComplete, () => {});
};

export default new vueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isFooterShow: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterShow: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
  ],
});

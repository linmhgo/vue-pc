import Vue from "vue";
import VueRouter from "vue-router";
import vueRouter from "vue-router";
// import Home from "@views/Home";
// import Login from "@views/Login";
// import Register from "@views/Register";
// import Search from "@views/Search";
// import Detail from "@views/Detail";
// import AddCartSuccess from "@views/AddCartSuccess";
// import ShopCart from "@views/ShopCart";
// import Pay from "@views/Pay";
// import PaySuccess from "@views/PaySuccess";
// import Trade from "@views/Trade";
// import Center from "@views/Center";
import store from "@store/index";
const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");
const Login = () => import(/* webpackChunkName: "Login" */ "../views/Login");
const Register = () =>
  import(/* webpackChunkName: "Register" */ "../views/Register");
const Search = () => import(/* webpackChunkName: "Home" */ "../views/Search");
const Detail = () => import(/* webpackChunkName: "Search" */ "../views/Detail");
const AddCartSuccess = () =>
  import(/* webpackChunkName: "AddCartSuccess" */ "../views/AddCartSuccess");
const ShopCart = () =>
  import(/* webpackChunkName: "ShopCart" */ "../views/ShopCart");
const Pay = () => import(/* webpackChunkName: "ShopCart" */ "../views/Pay");
const PaySuccess = () =>
  import(/* webpackChunkName: "PaySuccess" */ "../views/PaySuccess");
const Trade = () => import(/* webpackChunkName: "Trade" */ "../views/Trade");
const Center = () => import(/* webpackChunkName: "Center" */ "../views/Center");

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
  return replace.call(this, location, onComplete, () => {});
};

const router = new vueRouter({
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
    {
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    {
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      name: "center",
      path: "/center/myorder",
      component: Center,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
const localtion = ["/pay", "/paysuccess", "/trade", "/center/myorder"];
router.beforeEach((to, from, next) => {
  if (localtion.indexOf(to.path) > -1 && !store.state.user.token) {
    next("/login");
  }
  next();
});

// router.beforeEach((to, from, next) => {});
export default router;

import Vue from "vue";
import App from "./App";
import router from "./router/index";
import "./styles/reset.css";
<<<<<<< HEAD
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element";
import store from "./store";
=======
// import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element.js";
>>>>>>> 65707dded9f5021bacf212d3fa00fcd99e12b270

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

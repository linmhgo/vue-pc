import Vue from "vue";
import App from "./App";
import router from "./router/index";
import "./styles/reset.css";
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element";
import store from "./store";
import "./mock/mockServer";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

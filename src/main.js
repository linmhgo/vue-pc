import Vue from "vue";
import App from "./App";
import router from "./router/index";
import "./styles/reset.css";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

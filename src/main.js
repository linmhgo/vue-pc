import Vue from "vue";
import { config } from "vue/types/umd";
import App from "./App";

config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

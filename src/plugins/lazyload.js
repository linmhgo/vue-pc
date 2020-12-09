import VueLazyload from "vue-lazyload";
import Vue from "vue";
import loadingImg from "../assets/images/timg.gif";

Vue.use(VueLazyload, {
  loading: loadingImg,
});

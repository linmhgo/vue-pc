import axiso from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import getUserTempld from "./getUserTempld";
import store from "@store/index";

const userTempId = getUserTempld();
const instance = axiso.create({
  baseURL: "/api",
});
instance.interceptors.request.use((config) => {
  NProgress.start();
  config.headers.userTempId = userTempId;
  const token = store.state.user.token;
  if (token) {
    config.headers.token = token;
  }

  return config;
});
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }

    Message.error(response.data.message);
    return Promise.reject(response.data.message);
  },
  (err) => {
    NProgress.done();
    const message = err.message || "网络失败";

    Message.error(err);
    return Promise.reject(message);
  }
);
export default instance;

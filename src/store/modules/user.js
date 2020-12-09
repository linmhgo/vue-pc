import { reqRegister, reqLogin, reqLogOut } from "@api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  getters: {},
  actions: {
    async register({ commit }, { phone, password, code }) {
      console.log(commit);
      await reqRegister({ phone, password, code });
    },
    async login({ commit }, { phone, password }) {
      const getLogin = await reqLogin(phone, password);
      commit("LOGIN", getLogin);
    },
    async LogOut({ commit }) {
      await reqLogOut();
      commit("LOG_OUT");
    },
  },
  mutations: {
    LOGIN(state, getLogin) {
      state.name = getLogin.name;
      state.token = getLogin.token;
    },
    LOG_OUT(state) {
      (state.name = ""), (state.token = "");
    },
  },
};

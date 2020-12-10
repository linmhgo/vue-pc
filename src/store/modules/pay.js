import { reqAllTradeList } from "@api/pay";

export default {
  state: {
    allTradeLists: {
      allTrade: [],
      current: "",
      pages: "",
      size: "",
      total: "",
    },
  },
  getters: {},
  actions: {
    async allTradeList({ commit }, { page, limit }) {
      const allTrade = await reqAllTradeList({ page, limit });
      console.log(allTrade);
      commit("ALL_TRADE_LIST", allTrade);
    },
  },
  mutations: {
    ALL_TRADE_LIST(state, allTrade) {
      state.allTradeLists = allTrade;
    },
  },
};

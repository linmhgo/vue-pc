import { reqGetProductList } from "@api/search";

export default {
  state: {
    productLists: {
      trademarkList: [],
      goodsList: [],
      attrsList: [],
    },
  },
  getters: {
    attrsList(state) {
      return state.productLists.attrsList;
    },
    trademarkList(state) {
      return state.productLists.trademarkList;
    },
    goodsList(state) {
      return state.productLists.goodsList;
    },
  },
  actions: {
    async getProductList({ commit }, data = {}) {
      const productList = await reqGetProductList(data);
      commit("GET_PRODUCT_LIST", productList);
    },
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productLists = productList;
    },
  },
};

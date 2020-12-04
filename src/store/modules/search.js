import { reqGetProductList } from "@api/search";

export default {
  state: {
    productLists: {
      trademarkList: [],
      goodsList: [],
      attrsList: [],
      total: 0,
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
    pageSize(state) {
      return state.productLists.pageSize;
    },
    total(state) {
      return state.productLists.total;
    },
    pageNo(state) {
      return state.productLists.pageNo;
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

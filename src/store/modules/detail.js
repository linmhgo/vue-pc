import { reqGetProductDetail } from "@api/detail";

export default {
  state: {
    productDetail: {
      categoryView: {},
      spuSaleAttrList: [],
      skuInfo: {},
    },
  },
  getters: {
    categoryView(state) {
      return state.productDetail.categoryView;
    },
    spuSaleAttrList(state) {
      return state.productDetail.spuSaleAttrList;
    },
    skuInfo(state) {
      return state.productDetail.skuInfo;
    },
  },
  actions: {
    async getProductDetail({ commit }, id) {
      const detail = await reqGetProductDetail(id);
      console.log(detail);
      commit("GET_PRODUCT_DETAIL", detail);
    },
  },
  mutations: {
    GET_PRODUCT_DETAIL(state, detail) {
      state.productDetail = detail;
    },
  },
};

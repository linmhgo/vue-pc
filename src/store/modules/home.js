import { reqBaseCategoryList, reqBanners, reqFloors } from "@api/home";

export default {
  state: {
    baseCategoryLists: [],
    bannersImg: [],
    floorsData: [],
  },
  getters: {},
  actions: {
    async getbaseCategoryLists({ commit }) {
      const baseCategoryLists = await reqBaseCategoryList();
      commit("GET_BASECATEGORY_LISTS", baseCategoryLists);
    },
    async getBanners({ commit }) {
      const reqImg = await reqBanners();
      commit("GET_BANNERS", reqImg);
    },
    async getFloorsData({ commit }) {
      const reqFloorsData = await reqFloors();
      commit("GET_FLOORS_DATA", reqFloorsData);
    },
  },
  mutations: {
    GET_BASECATEGORY_LISTS(state, baseCategoryLists) {
      state.baseCategoryLists = baseCategoryLists;
    },
    GET_BANNERS(state, reqImg) {
      state.bannersImg = reqImg;
    },
    GET_FLOORS_DATA(state, reqFloorsData) {
      state.floorsData = reqFloorsData;
    },
  },
};

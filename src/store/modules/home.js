import { reqBaseCategoryList } from "@api/home";

export default {
  state: {
    baseCategoryLists: [],
  },
  getters: {},
  actions: {
    async getbaseCategoryLists({ commit }) {
      const baseCategoryLists = await reqBaseCategoryList();
      console.log(baseCategoryLists);
      commit("GET_BASECATEGORY_LISTS", baseCategoryLists);
    },
  },
  mutations: {
    GET_BASECATEGORY_LISTS(state, baseCategoryLists) {
      state.baseCategoryLists = baseCategoryLists;
    },
  },
};

import { reqGetCartList, reqGetAddToCart } from "@api/shopcart";

export default {
  state: {
    cartList: [],
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      console.log(cartList);
      commit("GET_CART_LIST", cartList);
    },
    async updateCartCount({ commit }, { skuId, skuNum }) {
      const a = await reqGetAddToCart(skuId, skuNum);
      console.log(a);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
  },
};

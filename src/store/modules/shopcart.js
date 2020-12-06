import {
  reqGetCartList,
  reqGetAddToCart,
  reqGetCheckCart,
} from "@api/shopcart";

export default {
  state: {
    cartList: [],
  },
  getters: {},
  actions: {
    //购物车数据请求
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      console.log(cartList);
      commit("GET_CART_LIST", cartList);
    },
    //购物车添加请求
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqGetAddToCart(skuId, skuNum);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
    //购物车商品checked请求
    async getCheckCart({ commit }, { skuId, isChecked }) {
      // console.log(skuId, isChecked);
      await reqGetCheckCart(skuId, isChecked);
      commit("GET_CHECK_CART", { skuId, isChecked });
    },
    //购物车商品数量更新
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      // console.log(skuId, skuNum);
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    //手动更新选没选中的数据
    GET_CHECK_CART(state, { skuId, isChecked }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.isChecked = isChecked;
        }
        return cart;
      });
    },
  },
};

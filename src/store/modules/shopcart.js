import {
  reqGetCartList,
  reqGetAddToCart,
  reqGetCheckCart,
  reqGetDeleteCart,
} from "@api/shopcart";

export default {
  state: {
    cartList: [],
    allShow: false,
    addCratsu: {
      imgIndex: 0,
      skuImageList: {},
    },
  },
  getters: {},
  actions: {
    //购物车数据请求
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
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
    //删除购物车商品
    async getDeleteCart({ commit }, skuId) {
      console.log(commit);
      await reqGetDeleteCart(skuId);
    },
    //全部选中数据
    allCheckedCart({ commit }) {
      commit("ALL_CHECKED_CART");
    },
    //点击全选中取消数据
    clickAllChecked({ commit }) {
      commit("CLICK_ALL_CHECKED");
    },
    addCratSuccess({ commit }, { imgIndex, skuImageList }) {
      commit("ADD_CRAT_SUCCESS", { imgIndex, skuImageList });
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        // if (skuNum < 0) return;
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    //手动更新数据的checked
    GET_CHECK_CART(state, { skuId, isChecked }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.isChecked = isChecked;
        }
        return cart;
      });
    },
    //全部更新商品状态
    ALL_CHECKED_CART(state) {
      const count = state.cartList.reduce((p, c) => {
        if (c.isChecked === 1) {
          ++p;
        }
        return p;
      }, 0);
      //长度一样的话就选中
      if (count === state.cartList.length) {
        state.allShow = true;
      } else {
        state.allShow = false;
      }
      //如果商品删除完了，就为false
      if (!state.cartList.length) {
        state.allShow = false;
        return state;
      }
    },
    //下面全选或全不选功能
    CLICK_ALL_CHECKED(state) {
      state.allShow = !state.allShow;
      state.cartList = state.cartList.map((cart) => {
        cart.isChecked = state.allShow === true ? 1 : 0;
        return cart;
      });
    },
    ADD_CRAT_SUCCESS(state, { imgIndex, skuImageList }) {
      state.addCratsu.skuImageList = skuImageList;
      state.addCratsu.imgIndex = imgIndex;
    },
  },
};

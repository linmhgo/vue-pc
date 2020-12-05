import request from "@utils/request";

//获取购物车列表
export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};
//添加到购物车
export const reqGetAddToCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

//切换商品选中状态
export const reqGetCheckCart = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `"/cart/checkCart/${skuId}/${isChecked}"`,
  });
};
//删除购物车商品
export const reqGetDeleteCart = (skuId) => {
  return request({
    method: "GDELETEET",
    url: `"/cart/deleteCart/${skuId}`,
  });
};

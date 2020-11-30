import request from "../utils/request";

export const reqBaseCategoryList = function() {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

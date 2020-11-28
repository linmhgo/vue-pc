import request from "../utils/request";

export const getBaseCategoryList = function() {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

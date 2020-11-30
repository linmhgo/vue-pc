import request from "../utils/request";
import reqMock from "@utils/reqMock";

export const reqBaseCategoryList = function() {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

export const reqBanners = function() {
  return reqMock({
    method: "GET",
    url: "/banners",
  });
};
export const reqFloors = function() {
  return reqMock({
    method: "GET",
    url: "/floors",
  });
};

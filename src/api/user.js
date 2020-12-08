import request from "../utils/request";

export const reqLogin = function(phone, password) {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};

export const reqRegister = function({ phone, password, code }) {
  console.log(phone, password, code);
  return request({
    method: "POST",
    url: "/user/passport/register",
    data: {
      phone,
      password,
      code,
    },
  });
};
//退出登录
export const reqLogOut = () => {
  return request({
    method: "GET",
    url: "/user/passport/logout",
  });
};

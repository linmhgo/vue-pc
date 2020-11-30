import Mock from "mockjs";
import rbanners from "./rbanners.json";
import floors from "./rfloors.json";

Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": rbanners,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2": floors,
});

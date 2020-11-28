<template>
  <div>
    login...
    <el-button type="primary" @click="request">登录</el-button>
    <el-button type="success" icon="el-icon-check" circle>111</el-button>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";

export default {
  name: "Login",
  methods: {
    request() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

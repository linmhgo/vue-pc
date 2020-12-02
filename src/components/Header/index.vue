<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="header-inner-left">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="left-one-a"> 登录</router-link>
            <router-link to="/register" class="left-one-a">
              免费注册</router-link
            >
          </p>
        </div>
        <div class="header-inner-right">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-buttom">
      <h1>
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div>
        <form action="" @submit.prevent="search">
          <input type="text" v-model="searchText" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      // const { searchText } = this;
      // const params = searchText ? `/${searchText}` : "";
      // const location = "/search" + params;
      // this.$router.push(location);
      const location = {
        name: "search",
      };
      if (this.searchText) {
        location.params = {
          searchText: this.searchText,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("delSearchText", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 136px;
  box-sizing: border-box;
}
.header-top {
  width: 100%;
  height: 30px;
  background-color: #eaeaea;
  .header-top-inner {
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .header-inner-left {
    height: 100%;
    width: 212px;
    display: flex;
    line-height: 30px;
    p:nth-of-type(1) {
      margin-right: 10px;
    }
  }
  .left-two-a {
    margin-left: 5px;
    padding: 0 5px;
  }
  .header-inner-right {
    height: 100%;
    width: 624px;
    line-height: 30px;
    a {
      padding: 0 10px;
    }
    a:nth-of-type(n + 2) {
      border-left: solid 1px #333;
    }
  }
}
.header-buttom {
  margin: 0 auto;
  display: flex;
  height: 106px;
  width: 1200px;
  justify-content: space-between;
  h1 {
    margin: 25px 45px;
  }
  div {
    margin-top: 25px;
  }
  input {
    width: 490px;
    height: 28px;
    border: 2px solid red;
    outline: none;
  }
  button {
    width: 68px;
    height: 32px;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: #ea4a36;
    outline: none;
  }
}
</style>

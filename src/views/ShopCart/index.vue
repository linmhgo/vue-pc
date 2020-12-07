<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cart, index) in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              @click="inpStatus(cart.skuId, cart.isChecked)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">
              {{ cart.skuName }}
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <button
              href="javascript:void(0)"
              class="mins"
              @click="AddDelCartCount(cart.skuId, -1, index)"
              :disabled="cart.skuNum === 1"
            >
              -
            </button>
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @blur="updateVla(cart.skuId, cart.skuNum, $event)"
              @input="impose"
            />
            <button
              href="javascript:void(0)"
              class="plus"
              @click="AddDelCartCount(cart.skuId, 1, index)"
              :disabled="cart.skuNum === 10"
            >
              +
            </button>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" href="javascript:" @click="delCart(cart.skuId)"
              >删除</a
            >
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="allShow"
          @click="clickChecked"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:" @click="delChecked">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ total }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费）：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ShopCart",
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
      allShow: (state) => state.shopcart.allShow,
    }),
    //商品总数
    total() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    //商品总价
    totalPrice() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0);
    },
  },
  methods: {
    ...mapActions([
      "getCartList",
      "getCheckCart",
      "updateCartCount",
      "getDeleteCart",
      "allCheckedCart",
      "clickAllChecked",
    ]),
    //商品cheked
    async inpStatus(skuId, isChecked) {
      isChecked = isChecked === 1 ? 0 : 1;
      await this.getCheckCart({ skuId, isChecked });
      //重新发送请求刷新更改过的请求
      // this.getCartList();
    },
    //商品增加和减少
    AddDelCartCount(skuId, skuNum, index) {
      if (this.cartList[index].skuNum <= 0) return;
      this.updateCartCount({ skuId, skuNum });
    },
    //删除购物车商品
    async delCart(skuId) {
      if (confirm("确定删除选中的商品")) {
        await this.getDeleteCart(skuId);
      }
      this.getCartList();
    },
    //全部更新商品状态
    clickChecked() {
      this.clickAllChecked();
    },
    //删除选中的商品
    delChecked() {
      if (confirm("确定删除选中的商品")) {
        // this.delCheckedCart();
        this.cartList.forEach(async (cart) => {
          if (cart.isChecked === 1) {
            await this.getDeleteCart(cart.skuId);
          }
        });
      }
      this.getCartList();
    },
    //失去焦点时重新计算商品价格
    updateVla(skuId, skuNum, e) {
      skuNum = e.target.value - skuNum;
      this.updateCartCount({ skuId, skuNum });
    },
    //限制输入的内容只能是数字
    impose(e) {
      let count = +e.target.value.replace(/\D+/g, "");
      if (count < 1) {
        count = 1;
      }
      if (count > 10) {
        count = 10;
      }
      e.target.value = count;
    },
  },
  watch: {
    cartList() {
      this.allCheckedCart();
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
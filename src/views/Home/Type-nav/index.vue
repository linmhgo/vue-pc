<template>
  <div class="Home-nav-out">
    <div class="Home-nav">
      <h2>全部商品分类</h2>
      <a href="">服装馆</a>
      <a href="">美装馆</a>
      <a href="">尚品汇超市</a>
      <a href="">全球购</a>
      <a href="">闪购</a>
      <a href="">团购</a>
      <a href="">有趣</a>
      <a href="">秒杀</a>
    </div>
    <div class="carousel-left">
      <ul
        class="list"
        v-for="baseCategoryList in baseCategoryLists"
        :key="baseCategoryList.categoryId"
      >
        <li>
          <a href="">{{ baseCategoryList.categoryName }}</a>
          <div class="box">
            <dl
              class="dl-lsit"
              v-for="child in baseCategoryList.categoryChild"
              :key="child.categoryId"
            >
              <dt>
                <a href="">{{ child.categoryName }}</a>
              </dt>
              <dd
                v-for="classify in child.categoryChild"
                :key="classify.categoryId"
              >
                <span
                  ><a href="">{{ classify.categoryName }}</a>
                </span>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBaseCategoryList } from "@api/home";

export default {
  name: "Type-nav",
  data() {
    return {
      baseCategoryLists: [],
    };
  },
  async mounted() {
    const lsit = await getBaseCategoryList();
    this.baseCategoryLists = lsit.slice(0, 15);
  },
};
</script>

<style lang="less" scoped>
.Home-nav-out {
  width: 100%;
  border-bottom: 2px solid red;
  position: relative;
}
.Home-nav {
  width: 1200px;
  margin: 0 auto;
  height: 45px;
  line-height: 45px;

  h2 {
    width: 210px;
    height: 45px;
    background-color: red;
    float: left;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
  a {
    font-size: 16px;
    margin: 0 22px;
  }
}
.carousel-left {
  left: 160px;
  top: 49px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 33;
  .list li {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0 20px;
    .box {
      width: 721px;
      height: 455px;
      background-color: #ebebeb;
      position: absolute;
      left: 210px;
      top: 0;
      display: none;
      z-index: 33;
    }
    &:hover .box {
      display: block;
    }
    .dl-lsit {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 0 20px;
      line-height: 20px;
      dd span {
        padding: 0 5px;
        // border-left: 1px solid #fff;
        font-size: 12px;
      }
      dt {
        padding: 0 5px;
        font-weight: bold;
        // height: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>

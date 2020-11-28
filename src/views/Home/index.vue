<template>
  <div class="Home">
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
    </div>
    <div class="Home-inner">
      <div class="carousel-content">
        <div class="carousel-left">
          <ul class="list">
            <li>
              <a href="">图书、音像、数字商品</a>
              <div class="box"></div>
            </li>
          </ul>
        </div>
        <div class="carousel-center"></div>
        <div class="carousel-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.Home {
  font-size: 0px;
}
.Home-inner {
  width: 1200px;
  margin: 0 auto;
}
.Home-nav-out {
  width: 100%;
  border-bottom: 2px solid red;
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
.carousel-content {
  width: 1200px;
  height: 464px;
  border: solid 1px red;
  display: flex;
  position: relative;
  .carousel-left {
    left: 0;
    top: -3px;
    width: 210px;
    height: 461px;
    position: absolute;
    background: #fafafa;
    .list li {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      padding: 0 20px;
      border: palevioletred 1px solid;
    }

    .box {
      width: 721px;
      height: 455px;
      background-color: peru;
      position: absolute;
      left: 210px;
      top: 0;
      display: none;
    }
    .lsit li:hover .box {
      display: block;
    }
  }
  .carousel-center {
    width: 730px;
    height: 455px;
    margin-left: 210px;
    border: 1px solid palevioletred;
  }
  .carousel-right {
    width: 250px;
    height: 457px;
    border: yellowgreen 1px solid;
  }
}
</style>

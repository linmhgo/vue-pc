<template>
  <div class="Home">
    <Typenav />
    <div class="commodity-lsit">
      <div class="carousel-content">
        <div class="carousel-center"></div>
        <div class="carousel-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Typenav from "./Type-nav";

export default {
  name: "Home",
  components: {
    Typenav,
  },
};
</script>

<style lang="less" scoped>
.Home {
  font-size: 0px;
}
.commodity-lsit {
  width: 1200px;
  margin: 0 auto;
}

.carousel-content {
  width: 1200px;
  height: 464px;
  border: solid 1px red;
  display: flex;
  position: relative;
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

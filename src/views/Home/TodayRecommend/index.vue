<template>
  <div class="recommend">
    <dl class="dl-list">
      <dt>
        <div>
          <img src="./images/clock.png" alt="" />
          <h3>今日推荐</h3>
        </div>
      </dt>
      <dd>
        <a href="">
          <img src="./images/today01.png" alt="" />
        </a>
      </dd>
      <dd>
        <a href="">
          <img src="./images/today02.png" alt="" />
        </a>
      </dd>
      <dd>
        <a href="">
          <img src="./images/today03.png" alt="" />
        </a>
      </dd>
      <dd>
        <a href="">
          <img src="./images/today04.png" alt="" />
        </a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "TodayRecommend",
};
</script>

<style lang="less" scoped>
.dl-list {
  margin: 10px auto;
  display: flex;
  width: 1200px;
  height: 165px;
  font-size: 0;
  dt {
    width: 200px;
    height: 165px;

    background-color: #5c5251;
    div {
      height: 165px;
      padding: 30px 0px;
      box-sizing: border-box;
      text-align: center;
      h3 {
        margin: 9px 0;
        color: #fff;
        font-size: 16px;
      }
    }
  }
  dd {
    width: 250px;
    height: 165px;
    img {
      height: 100%;
      width: 100%;
      transition: all 400ms;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>

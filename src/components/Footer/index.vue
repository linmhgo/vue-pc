<template>
  <div class="Footer">
    <div class="Footer-inner">
      <div class="inner-top">
        <dl>
          <dt></dt>
          <dd></dd>
        </dl>
      </div>
      <div class="inner-buttom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.Footer {
  height: 320px;
  background-color: #eaeaea;
}
.Footer-inner {
  width: 1200px;
  height: 320px;
  margin: 0 auto;
  border: 1px solid red;
}
.inner-top {
  height: 162px;
  width: 1200px;
  border: 1px black solid;
}
.inner-buttom {
  height: 75px;
  width: 1200px;
  border: 1px green solid;
}
</style>

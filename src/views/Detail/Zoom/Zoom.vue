<template>
  <div class="spec-preview" ref="outerBox" @mousemove="zoomImg">
    <img :src="bigImg" />
    <div class="event"></div>
    <div class="big">
      <img
        :src="bigImg"
        :style="{
          transform: `translateX(-${bigImgOffsetX}px) translateY(-${bigImgOffsetY}px)`,
        }"
      />
    </div>
    <div
      class="mask"
      ref="moveBox"
      :style="{
        transform: `translateX(${offsetX}px) translateY(${offsetY}px)`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      offsetX: 0,
      offsetY: 0,
    };
  },
  props: {
    bigImg: String,
  },
  computed: {
    bigImgOffsetX() {
      return this.offsetX * 2;
    },
    bigImgOffsetY() {
      return this.offsetY * 2;
    },
  },
  methods: {
    zoomImg(e) {
      const outer = this.$refs.outerBox;
      const move = this.$refs.moveBox;
      const distanceW = outer.offsetWidth - move.clientWidth;
      const distanceH = outer.offsetHeight - move.clientHeight;
      this.offsetX = e.offsetX - move.clientWidth / 2;
      this.offsetY = e.offsetY - move.clientHeight / 2;
      if (this.offsetX <= 0) {
        this.offsetX = 0;
      }
      if (this.offsetX >= distanceW) {
        this.offsetX = distanceW;
      }
      if (this.offsetY <= 0) {
        this.offsetY = 0;
      }
      if (this.offsetY >= distanceH) {
        this.offsetY = distanceH;
      }
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
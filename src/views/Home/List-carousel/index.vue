<template>
  <div class="commodity-lsit">
    <div class="carousel-content">
      <div class="carousel-center">
        <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="img in bannersImg" :key="img.id">
              <img :src="img.imgUrl" alt="" class="index-img" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> -->
        <Carousel :carouselImg="bannersImg" />
      </div>
      <div class="carousel-right">
        <h2>
          <p>尚品汇快报</p>
          <span>更多></span>
        </h2>
        <ul class="list-slogan">
          <li><span>[公告]</span> 备战开学季 全民半价购数码</li>
          <li><span>[公告]</span> 备战开学季 全民半价购数码</li>
          <li><span>[公告]</span> 备战开学季 全民半价购数码</li>
          <li><span>[公告]</span> 备战开学季 全民半价购数码</li>
          <li><span>[公告]</span> 备战开学季 全民半价购数码</li>
        </ul>
        <ul class="spirit">
          <li>
            <a href=""><p></p></a>
            <a href=""><span>话费</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>机票</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>电影票</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>游戏</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>彩票</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>加油站</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>酒店</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>火车票</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>众筹</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>理财</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>礼品卡</span></a>
          </li>
          <li>
            <a href=""><p></p></a>
            <a href=""><span>白条</span></a>
          </li>
        </ul>
        <div class="image">
          <img src="./images/ad1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carousel from "../../../components/Carousel";
// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.min.css";
// Swiper.use([Navigation, Pagination]);

export default {
  name: "List-carousel",
  components: {
    Carousel,
  },
  computed: {
    ...mapState({
      bannersImg: (state) => state.home.bannersImg,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  async mounted() {
    await this.getBanners();

    // this.$nextTick(() => {
    //   new Swiper(".swiper-container", {
    //     // direction: "vertical", // 垂直切换选项
    //     loop: true, // 循环模式选项
    //     // autoplay: true,
    //     // 如果需要分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },

    //     // 如果需要滚动条
    //     // scrollbar: {
    //     //   el: ".swiper-scrollbar",
    //     // },
    //   });
    // });
  },
};
</script>

<style lang="less" scoped>
.carousel-content {
  width: 1200px;
  height: 464px;
  display: flex;
  position: relative;

  .carousel-center {
    padding: 5px;
    width: 730px;
    height: 455px;
    margin-left: 210px;
    overflow: hidden;
  }
  .carousel-right {
    width: 250px;
    height: 457px;
  }
}
h2 {
  width: 218px;
  height: 22px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0 5px;
  padding: 5px 10px;
  border-bottom: 1px solid red;
  span {
    font-size: 12px;
  }
  p {
    font-size: 14px;
  }
}
.list-slogan {
  width: 218px;
  height: 128px;
  padding: 5px 15px;
  li {
    width: 218px;
    height: 25px;
    font-size: 12px;
    span {
      font-weight: bold;
    }
  }
}
.spirit {
  width: 249px;
  height: 195px;
  display: flex;
  flex-wrap: wrap;
  font-size: 0px;
  li {
    width: 62px;
    height: 64px;
    border-left: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    box-sizing: border-box;
    font-size: 0px;
    p {
      width: 60px;
      height: 40px;
    }
    span {
      width: 60px;
      height: 21px;
      display: block;
      font-size: 12px;
      line-height: 21px;
      text-align: center;
    }
  }
  li:nth-of-type(1) {
    p {
      background: url(../images/icons.png) 0px -5px;
    }
  }
  li:nth-of-type(2) {
    p {
      background: url(../images/icons.png) -62px -5px;
    }
  }
  li:nth-of-type(3) {
    p {
      background: url(../images/icons.png) -126px -5px;
    }
  }
  li:nth-of-type(4) {
    border-right: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) -190px -5px;
    }
  }
  li:nth-of-type(5) {
    margin-top: -2px;
    p {
      background: url(../images/icons.png) 0px -76px;
    }
  }
  li:nth-of-type(6) {
    margin-top: -2px;
    p {
      background: url(../images/icons.png) -62px -76px;
    }
  }
  li:nth-of-type(7) {
    margin-top: -2px;
    p {
      background: url(../images/icons.png) -126px -76px;
    }
  }
  li:nth-of-type(8) {
    margin-top: -2px;
    border-right: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) -190px -76px;
    }
  }
  li:nth-of-type(9) {
    margin-top: -2px;
    border-bottom: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) 0px -146px;
    }
  }
  li:nth-of-type(10) {
    margin-top: -2px;
    border-bottom: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) -62px -146px;
    }
  }
  li:nth-of-type(11) {
    margin-top: -2px;
    border-bottom: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) -126px -146px;
    }
  }
  li:nth-of-type(12) {
    margin-top: -2px;
    border-right: solid 1px #e4e4e4;
    border-bottom: solid 1px #e4e4e4;
    p {
      background: url(../images/icons.png) -190px -146px;
    }
  }
}
.image {
  width: 250px;
  height: 75px;
}
</style>

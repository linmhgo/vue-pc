<template>
  <div class="Home">
    <Typenav />
    <ListCarousel />
    <TodayRecommend />
    <RankingList />
    <Like />
    <Floor
      v-for="(banner, index) in floorsData"
      :key="index"
      :banner="banner"
    />
    <Brand />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Typenav from "../../components/Type-nav";
import ListCarousel from "./List-carousel";
import TodayRecommend from "./TodayRecommend";
import RankingList from "./Rankinglist";
import Like from "./Like/";
import Floor from "./Floor";
import Brand from "./Brand";

export default {
  name: "Home",
  components: {
    Typenav,
    ListCarousel,
    TodayRecommend,
    RankingList,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorsData: (state) => state.home.floorsData,
    }),
  },
  methods: {
    ...mapActions(["getFloorsData"]),
  },
  mounted() {
    console.log(this);
    this.getFloorsData();
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
</style>

<template>
  <div class="pagination">
    <button @click="setCurrentPage(myCurrentPage - 1)">上一页</button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPages }"
      @click="setCurrentPage(totalPages)"
      v-show="totalPages > 1"
    >
      {{ totalPages }}
    </button>
    <button @click="setCurrentPage(myCurrentPage + 1)">下一页</button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    //显示的按钮数
    pageCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    //每条页数
    pageSize: {
      type: Number,
      default: 10,
    },
    //总条数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //当前页数
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    //总页数
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算开始和结束的按钮
    startEnd() {
      const { totalPages, pageCount, myCurrentPage } = this;
      //中间按键有多少个
      const count = pageCount - 2;
      //中间一半的按键数量
      const halfCount = Math.floor(count / 2);

      let start, end;
      //6>8-2
      if (myCurrentPage >= totalPages - halfCount) {
        //当选中后面的那几个数是start的值
        start = totalPages - count;
      } else {
        //正常情况下start的值
        start = myCurrentPage - halfCount;
      }
      if (start <= 1) {
        start = 2;
      }
      end = start + count - 1;
      //当最后一位数大于总页数时那么他的值就是总页数减一
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(id) {
      this.myCurrentPage = id;
    },
  },
  watch: {
    myCurrentPage() {
      this.$emit("current-change", this.myCurrentPage);
    },
    // 当外面页面发生变化，里面页面也要变化
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>

<template>
  <el-card
    class="card" 
    :style="isCardClick ? { 'background-color': '#e6e6e6', width, height, fontSize } : { width, height, fontSize }"
  >
    <span class="card-text" v-if="cardColumn === 3 && cardRow === 3" @click="changeCardClickState" :style="isCardClick ? { 'background-color': '#e6e6e6'} : null">Free</span>
    <span class="card-text" v-else @click="changeCardClickState">{{ randint }}</span>
  </el-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      isCardClick: false,
      width: window.innerWidth < 500 ? "40px" : "80px",
      height: window.innerWidth < 500 ? "40px" : "80px",
      fontSize: window.innerWidth < 500 ? "5px" : "16px"
    }
  },
  props: {
    randint: {
      type: Number
    },
    cardColumn: {
      type: Number
    },
    cardRow: {
      type: Number
    },
  },
  methods: {
    changeCardClickState(id: string) {
      this.isCardClick = !this.isCardClick
    },
    handleResize() {
      this.width = window.innerWidth < 500 ? "40px" : "80px";
      this.height = window.innerWidth < 500 ? "40px" : "80px";
      this.fontSize = window.innerWidth < 500 ? "5px" : "16px";
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
});
</script>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .card-row{
    text-align: center;
  }

  .card {
    display: inline-block;
    text-align: center;
  }

  .card-text {
    cursor: pointer;
  }
</style>
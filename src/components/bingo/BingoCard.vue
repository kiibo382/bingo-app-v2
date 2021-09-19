<template>
  <div class="bingo-card">
    <span class="card-column" v-for="i in 5" :key="i">
      <span class="card-row" v-for="j in 5" :key="j">
        <bingo-card-each :randint="randintList[i-1][j-1]" :cardColumn=i :cardRow=j />
      </span>
      <br>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BingoCardEach from "./BingoCardEach.vue"

export default Vue.extend({
  data: function() {
    const randintList = []
    let randintRow = []
    const min = Math.ceil(1);
    const max = Math.floor(100);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        randintRow.push(Math.floor(Math.random() * (max - min) + min))
      }
      randintList.push(randintRow)
      randintRow = []
    }
    return {
      randintList,
    }
  },
  components: {
    BingoCardEach
  },
  mounted: function () {
    window.onbeforeunload = function() {
      return 'Do you want to reload? The data will be deleted.';
    }
  },
  destroyed () {
    window.onbeforeunload = null
  }
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
</style>
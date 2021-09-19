<template>
  <div class="bingo-main">
    <h1>Welcome to Bingo</h1>
    <BingoCreate />
    <BingoList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BingoCreate from "./BingoCreate.vue";
import BingoList from "./BingoList.vue";

export default Vue.extend({
  components: {
    BingoCreate,
    BingoList,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="bingo-each">
    <p>
      <router-link to="/bingo/card">card</router-link>
    </p>
    <p>
      <router-link to="/bingo/draw">draw</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
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

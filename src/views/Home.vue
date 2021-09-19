<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/bingo">Go to Bingo</router-link>
    <BingoMain />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BingoMain from "../components/bingo/BingoMain.vue";

export default Vue.extend({
  components: {
    BingoMain,
  },
});
</script>

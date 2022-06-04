<template>
  <div>
    <h1>当前数量：{{ count }}</h1>
    <button v-on:click="count = count + 1">点击加1</button>
    <button v-on:click="add">add点击+1</button>
    <button v-on:click="addcount(10)">addcount点击+1</button>
    <button @click="addcount(10)">addcount点击+1(简写)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    add() {
      return this.count++;
    },
    addcount(num){
      return this.count+=num;
    }
  },
};
</script>

<style scoped>
</style>

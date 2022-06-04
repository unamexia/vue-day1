<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    // return 饭hi的是个对象
    return {
      // 声明变量 msg，值为'Hello Vue'
      msg: "Hello Vue",
      obj: {
        name: "zs",
        age: 19,
      },
    };
  },
};
</script>

<style scoped>

</style>

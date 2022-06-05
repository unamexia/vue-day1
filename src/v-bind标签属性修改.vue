<template>
  <div>
    <a :href="www.baidu.com"></a>
    <img src="" alt="">
  </div>
</template>

<script>
export default {
  data() {
    // return 饭hi的是个对象
    return {
      // 声明变量 msg，值为'Hello Vue'
      url: 'https://www.baidu.com/'
    };
  },
};
</script>

<style scoped>

</style>

<template>
  <div>
    <h1>{{meg}}</h1>
    <button @click="btnFn">点我翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meg: "Hello,World3",
    };
  },
  methods: {
    btnFn(){
      // // 把字符串转成数组
      // const res1 = this.meg.split('');
      // // 数组调用 reverse 方法翻转数组
      // res1.reverse();
      // console.log(res1);
      // // 字符串再合并成字符串
      // const res2 = res1.join('');
      // // 更新字符串数据
      // this.meg = res2
      this.meg = this.meg.split('').reverse().join('');
    }
  },
};
</script>

<style scoped>
</style>

<template>
  <div id="app">
    <button @click="isShow = !isShow">切换状态</button>
    <ul v-if="isShow">
      <li>123</li>
      <li>143</li>
      <li>133</li>
    </ul>
    <div v-else>空状态</div>
  </div>
</template>

<script>
/* 
  Vue 开发思维转换：数据驱动视图
*/
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped></style>
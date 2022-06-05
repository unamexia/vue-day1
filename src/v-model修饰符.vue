<template>
  <div id="app">
    <!--
      v-model 修饰符 
        .trim        去除字符串的首尾空格
        .number      转换成数字类型
        .lazy        失去焦点后才收集数据(change)
    -->
    <input type="text" v-model.trim="username" />
    <input type="text" v-model.number="count" />
    <p>{{ count + 1 }}</p>

    <span>自我介绍:</span>
    <textarea v-model.lazy="intro"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '匿名',
      count: 1,
      intro: '自我介绍',
    }
  },
}
</script>

<style></style>
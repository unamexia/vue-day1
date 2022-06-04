<template>
  <div>
    <h1>当前数量：{{ count }}</h1>
    <!-- 表示不传参，返回undefined -->
    <button @click="add()">事件对象1</button>
    <!-- 默认情况下不写小括号，Vue会自动传递事件对象 $event -->
    <button @click="add">事件对象2</button>
    <!-- 注意：模板中$event 表示事件对象 -->
    <button @click="add($event)">事件对象3</button>

    <!-- 事件委托案例 -->
    <a @click="gotoBaidu" href="www.baidu.com">123</a>
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
    add(e) {
      console.log('e: ', e);
    },
    gotoBaidu(e){
      e.preventDefault();
    }
  },
};
</script>

<style scoped>
</style>

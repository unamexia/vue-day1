<template>
  <div>
    <h1>事件修饰符</h1>
    <div class="box" @click="fatherfn">
      父元素
      <!-- 阻止事件冒泡 -->
      <button @click.stop="stopFn">子元素按钮</button>
      <!-- 阻止标签默认行为 -->
      <a @click.prevent="linkFn" href="www.baidu.com">123</a>
      <!-- 标签只会运行一次事件函数 -->
      <button @click.once="onceFn">只能按一次</button>
      <!-- 可以连写，比如要阻止默认行为也要阻止冒泡 -->
      <!-- <button @click.stop.prevent="stopFn">子元素按钮</button> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fatherfn(){
      console.log("点击了父元素");
    },
    stopFn(){
      console.log('点击了子元素');
    },
    linkFn(){
      console.log('阻止了跳转');
    },
    onceFn(){
      console.log('只能运行一次');
    }
  },
};
</script>

<style scoped>
</style>

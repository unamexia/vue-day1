<template>
  <div id="app">
    <div>
      来自：
      <!-- 
        下拉框绑定
        注意：v-model 绑定给 select 标签
      -->
      <select v-model="city">
        <option value="广州">广州</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
      </select>
    </div>
    <div>
      爱好:
      <!-- 
        复选框绑定
        注意：
          1. v-model 绑定同名变量
          2. 复选框收集多个数据，初始值要设置为数组
      -->
      <label><input type="checkbox" v-model="hobby" value="敲代码" /> 敲代码</label>
      <label><input type="checkbox" v-model="hobby" value="干饭" /> 干饭</label>
      <label><input type="checkbox" v-model="hobby" value="睡觉" /> 睡觉</label>
    </div>
    <div>
      性别：
      <!-- 
        单选框绑定
        注意：v-model 绑定同名变量
      -->
      <label><input v-model="gender" type="radio" value="男" />男</label>
      <label><input v-model="gender" type="radio" value="女" />女</label>
    </div>
    <div>
      自我介绍：
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
/* 
  Vue 开发思维转换：数据驱动视图
*/
export default {
  data() {
    return {
      // 下拉框默认城市
      city: '广州',
      // 爱好复选框：收集多个数据，初始值要设置为数组
      hobby: ['敲代码'],
      // 单选框默认性别
      gender: '男',
      // 自我介绍
      intro: '',
    }
  },
}
</script>

<style scoped></style>
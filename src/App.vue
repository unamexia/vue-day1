<template>
  <div>
    <h1>双向数据绑定v-model</h1>
    用户名: <input type="text" name="" id="" v-model="username" /> 密码:
    <input type="password" name="" id="" v-model="password" />
    <button @click="btnFn">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    btnFn() {
      console.log("用户名", this.username);
      console.log("密码: ", this.password);
    },
  },
};
</script>

<style scoped>
</style>

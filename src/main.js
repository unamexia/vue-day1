// 导入vue这个包
import Vue from 'vue'
// 导入本地文件 App.vue
import App from './App.vue'

// 开发提示：默认关闭
Vue.config.productionTip = false

// 创建一个 vue 实例
new Vue({
  // render 渲染App文件(组件)到页面中
  render: h => h(App),

})
// mount 挂载到#app中 
.$mount('#app')

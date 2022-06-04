const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint 检查，暂时先把焦点放到Vue基础语法上
  lintOnSave: false,
  // devServer 开发服务器配置
  devServer: {
    host: "localhost", // 修改默认ip
    port: 3000,  // 修改端口号为 3000
    open: true,  // 默认浏览器打开项目
  },
  // 修改了vue.confit.js配置需要重启服务 yarn serve
  transpileDependencies: true
})

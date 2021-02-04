import Vue from 'vue';
import App from './App.vue';
import router from './router'
import '@/assets/js/mobileFont'

/*
*上面这行代码的意思 是阻止显示生产模式的消息。
*如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。

*You are running Vue in development mode.
*Make sure to turn on production mode when deploying for production.
*/
Vue.config.productionTip = false;

// 取消 Vue 所有的日志与警告。
Vue.config.silent = true

// 务必在加载 Vue 之后，立即同步设置以下内容
/**
*配置是否允许 vue-devtools 检查代码。
*开发版本默认为 true，生产版本默认为 false。
*生产版本设为 true 可以启用检查。
*/
Vue.config.devtools = true

// Vue 安装版本号
console.log(Vue.version);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

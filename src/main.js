// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui';
import store from './store/index';
import 'element-ui/lib/theme-chalk/index.css';

//引入获取url参数的公共方法
import getQueryValue from './until/getUrlValue.js';
Vue.prototype.getQueryValue = getQueryValue;

// 引入公用组件
import './until/components';


// vuex状态仓库
Vue.prototype.$store = store;

Vue.config.productionTip = false


Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

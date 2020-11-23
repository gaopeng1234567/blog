import Vue from 'vue'
import App from './App.vue'
// import {Message,Header,Main,Footer,Row,Col,Form} from 'element-ui'
import ElementUI from 'element-ui';
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

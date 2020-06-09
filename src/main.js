import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '@/utils/global'
import './promission.js'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

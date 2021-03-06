import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import MyIcon from '@/components/Myicon.vue'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/index.less'
Vue.component('MyIcon', MyIcon)

Vue.config.productionTip = false

Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

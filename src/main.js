import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '@/store/index.js'
import globalFunction from '@/./global/globalFunction'
import globalConst from "@/global/globalConst";
import * as filters from '@/filters/index.js'
import '@/assets/styles/css/base.css'
import '@/assets/styles/css/border.css'
import '@/assets/styles/css/element-cover.css'
import '@/assets/styles/css/mediaScreen.styl'
import '@/router/before.js'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element.js'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false;
Vue.use(globalConst);
Vue.use(globalFunction);
Vue.use(element);
Vue.use(uploader);
Vue.prototype.$EventBus = new Vue()

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

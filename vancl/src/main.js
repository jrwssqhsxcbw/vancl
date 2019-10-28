import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import RegFooter from './components/RegFooter'
import LoginHeader from './components/LoginHeader'
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
import BayWindow from './components/BayWindow'
import decarousel from './components/decarousel'
import carousel from './views/carousel'

// import sass from 'sass-loader'
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:8080"
import vuex from "vuex"
Vue.use(vuex)
Vue.config.productionTip = false;
Vue.prototype.axios=axios;
Vue.component("reg-footer",RegFooter)
Vue.component("login-header",LoginHeader)
Vue.component("my-header",myHeader)
Vue.component("my-footer",myFooter)
Vue.component("bay-window",BayWindow)
Vue.component("carousel",carousel)
Vue.component("decarousel",decarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

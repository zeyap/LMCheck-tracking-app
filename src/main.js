import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

import ECharts from 'vue-echarts/components/ECharts';
Vue.component('v-chart', ECharts);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

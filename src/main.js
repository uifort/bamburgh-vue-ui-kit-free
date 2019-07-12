import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from "bootstrap-vue"
import VueStickyKit from 'vue-stickykit'

Vue.use(BootstrapVue);
Vue.use(VueStickyKit);

Vue.config.productionTip = false;

import Default from './Layout/Wrappers/baseLayout.vue';
import '../node_modules/nprogress/nprogress.css'

Vue.component('default-layout', Default);

new Vue({
  router,
  store,
render: h => h(App)
}).$mount('#app');
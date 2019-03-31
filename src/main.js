import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTimers from 'vue-timers'
import VueFire from 'vuefire'

Vue.use(VueFire);
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter);
import router from './router'

library.add(faUser, faEye, faArrowRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueTimers);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  el:"#app",
  router,
  template: "<App/>",
  components: { App
  },
  render: h => h(App),
}).$mount('#app');

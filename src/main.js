import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// global 的東西我比較喜歡放這
// import './assets/style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

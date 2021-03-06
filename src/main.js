import Vue from 'vue';
import App from './App.vue';
import './plugins/axios'
// import axios from 'axios';
// import VueAxios from "vue-axios";
import router from "./router";
import 'bootstrap';
// import $ from 'jquery';

Vue.config.productionTip = false;

new Vue({
  // $,
  router,
  render: h => h(App),
}).$mount('#app');

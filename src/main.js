import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from "vue-axios";
import router from "./router";
import 'bootstrap';
// import $ from 'jquery';

Vue.config.productionTip = false;

new Vue({
  // $,
  router,
  axios,
  VueAxios,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import store from './store/store'
import VueResource from 'vue-resource';

Vue.use(VueRouter);

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-js-stock-rater.firebaseio.com/'

Vue.filter('currency', (value) => {
  //adds dollarsign to funds and makes it look like money
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

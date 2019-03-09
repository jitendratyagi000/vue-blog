import Vue from 'vue'
import App from './App.vue'
import Routes from './routes';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);



Vue.config.productionTip = false

Vue.directive('random-color', {
  bind: (el, binding, vnode) => {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('themes', {
  bind: (el, binding, vnode) => {
    if (binding.value == "wide") {
      el.style.maxWidth = "80%";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "60%";
    }
  }
})

Vue.filter('to-upppercase', (value) => {
  return value.toUpperCase();
})


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://polar-escarpment-64317.herokuapp.com/';


axios.interceptors.response.use(undefined, function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    store.dispatch('logout');
    return router.push('/');
  }
});

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app');

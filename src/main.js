import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

store.$axios = axios;
createApp(App).use(store).use(router).mount('#app');

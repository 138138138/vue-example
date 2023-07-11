import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import store from './scripts/store/store';

createApp(App).use(Quasar).use(store).mount('#app');

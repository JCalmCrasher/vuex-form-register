import {
    createApp
} from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import './assets/App.css';

import {
    store
} from './store/store'

const app = createApp(App);
app.use(store);

app.config.devtools = true;

app.mount('#app');
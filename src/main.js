import './style.css';
import store from './store/main.js';
import meta from './meta/main.js';
import router from './routes/main.js';
import { createApp } from 'vue';
import App from './App.vue';

// Create vue app
const app = createApp(App);
app.use(store);
app.use(meta);
app.use(router);

// router.isReady(() => {
//     app.mount('#app');
// });

app.mount('#app');

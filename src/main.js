import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
import store from "./store/index";
import "./assets/reset.min.css";
import './assets/icon/iconfont.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

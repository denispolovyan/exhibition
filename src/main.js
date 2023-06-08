import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);
app.use(store);
app.directive("scroll-to", VueScrollTo);
app.mount("#app");


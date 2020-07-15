import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import { Router as router, i18n } from "./plugins";
import "./assets/scss/styles.scss";

Vue.config.productionTip = false;

throw "coucou";

new Vue({
    router,
    store,
    i18n,
    render(h) {
        return h(App);
    },
}).$mount("#app");
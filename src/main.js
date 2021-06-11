import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import "./global-components";

import "./assets/main.scss";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/stocks";

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");

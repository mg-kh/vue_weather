import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { API_SERVICES } from "@/api-services/index.js";
import HighchartsVue from "highcharts-vue";
import global from "@/mixins/global";

// Themes [ bootstrap ]
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/style/style.scss";

API_SERVICES.init();
Vue.use(HighchartsVue);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.mixin(global);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { config } from "./config";

export const API_SERVICES = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = config.baseURL;
    axios.defaults.params = {};
    Vue.axios.defaults.params["appid"] = config.apiKey;
    Vue.axios.defaults.params["units"] = config.unit;
  },
  get(route, param) {
    return Vue.axios.get(`${route}?q=${param}`);
  },
};

const weather = {
  get(param) {
    return API_SERVICES.get("data/2.5/weather", param);
  },
};

export { weather };

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalStatus: false,
    darkTheme: false,
  },
  mutations: {
    toggleModal(state) {
      state.modalStatus = !state.modalStatus;
    },
    themeSwitch(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
  actions: {},
  modules: {},
});

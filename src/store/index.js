import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
  },
  getters: {},
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {},
  modules: {},
});

import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      lang: "en",
    };
  },
  getters: {
    getLanguage(state) {
      return state.lang;
    },
  },
  mutations: {
    setLanguage(state, value) {
      state.lang = value;
    },
  },
});

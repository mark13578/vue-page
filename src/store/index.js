import { createStore } from "vuex";

export default createStore({
  state: {
    loginState: false,
    menuState: false
  },
  actions: {
    handleLoginState({ commit }, bool) {
      commit("SET_LOGIN_STATE", bool);
    },
    handleMenuState({ commit }, bool) {
      commit("SET_MENU_STATE", bool);
    }
  },
  mutations: {
    SET_LOGIN_STATE(state, bool) {
      state.loginState = bool;
    },
    SET_MENU_STATE(state, bool) {
      state.menuState = bool;
    }
  },
  getters: {
    loginState: (state) => state.loginState,
    menuState: (state) => state.menuState
  }
});

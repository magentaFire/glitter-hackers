import Vue from 'vue';

const store = {
  state: {
    key1: 'funciona?',
  },
  getters: {
    getWholeState: state => state,
  },
  mutations: {
    mutateKey1: (state, payload) => {
      Vue.set(state, 'key1', payload);
    },
  },
  actions: {
    dspUpdateKey1: ({ commit }, payload) => {
      commit('mutateKey1', payload);
    },
  },
};

export default store;

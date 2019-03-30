import Vue from 'vue';
import Vuex from 'vuex';
import MainStore from './store/index';

const store = {
  state: {
    ...MainStore.state,
  },
  actions: {
    ...MainStore.actions,
  },
  getters: {
    ...MainStore.getters,
  },
  mutations: {
    ...MainStore.mutations,
  },
};

Vue.use(Vuex);
export default new Vuex.Store(store);

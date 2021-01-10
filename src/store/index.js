import Vue from 'vue'
import Vuex from 'vuex'

import 'es6-promise/auto'

import entertainment from './modules/entertainment'


Vue.use(Vuex);

export const store = new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
  modules: {
    entertainment
  }
});

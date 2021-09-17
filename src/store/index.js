import Vuex from 'vuex'
import { createStore } from 'vuex'
import auth from './auth'

export default createStore({
  state: {
    test: null,
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    auth
  }
})

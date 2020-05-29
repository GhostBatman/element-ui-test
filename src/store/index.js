import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import modules from './modules/index'
import { API_URL } from "@/common/config";

Vue.use(Vuex)

export const store = () => new Vuex.Store({
  modules,
  namespaced: true,
  state: {
    users: [],
    user: {},
    isAuthenticated: false
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_AUTH(state, payload) {
      state.isAuthenticated = payload
    }
  },
  getters: {
    GET_USERS({users}) {
      return users
    },
    GET_USER({user}) {
      return user
    },
    IS_AUTH({isAuthenticated}) {
      return isAuthenticated
    }
  },
  actions: {
    GET_USERS({commit}) {
      const body = {since: 0, per_page: 20}
      return new Promise((resolve, reject) => {
        Axios.get(`${API_URL}/users`, {params: body})
          .then(res => {
            commit('SET_USERS', res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    GET_USER({commit}, username) {
      return new Promise((resolve, reject) => {
        Axios.get(`${API_URL}/users/${username}`)
          .then(res => {
            commit('SET_USER', res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})

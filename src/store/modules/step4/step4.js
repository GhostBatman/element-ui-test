import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    additionalServices: []
  },
  mutations: {
    updateAdditionalServices(state, payload) {
      state.additionalServices = payload
    }
  },
  getters: {
  },
  actions: {
    fetchAdditionalServices(context) {
      Axios.get('https://qweep.ru/api/services/additional/list/').then(response => {
        context.commit('updateAdditionalServices', response.data)
      })
    }
  },
}
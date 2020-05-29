import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    services: []
  },
  mutations: {
    updateRooms(state, payload) {
      state.services = payload
    }
  },
  getters: {
  },
  actions: {
    fetchServices(context) {
      Axios.get('https://qweep.ru/api/services/list/').then(response => {
        let services = response.data.filter(service => service.type === 'rooms');
        context.commit('updateRooms', services)
      })
    }
  },
}
export default {
  namespaced: true,
  state: {
    types: [
      {name: 'Поддеживающая', value: 'default'},
      {name: 'Генеральная', value: 'major'},
      {name: 'После ремонта', value: 'after_repair'},
      // {name: 'После долгого отъезда', value: 'after_long_vocation'},
      {name: 'После вечеринки', value: 'after_party'}
    ]
  },
  mutations: {},
  getters: {},
  actions: {
  },
};
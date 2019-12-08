import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: [],
    loading: true,
  },
  mutations: {
    setProfiles (state, payload) {
      state.profiles = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    loadProfiles (context) {
      fetch('http://localhost:3000/profiles')
        .then(response => response.json())
        .then(data => {
          context.commit('setProfiles', data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          context.commit('setLoading', false)
        })
    }
  }
}
)

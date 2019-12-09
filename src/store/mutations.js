export default {
  addWatchNumbers: (state, payload) => {
    state.watchNumber = payload
  },

  addUsersNumber: (state, payload) => {
    state.usersNumber.push(payload)
  },

  setProfiles (state, payload) {
    state.profiles = payload
  },
  
  setLoading (state, payload) {
    state.loading = payload
  }
}

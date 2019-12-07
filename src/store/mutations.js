export default {
  addWatchNumbers: (state, payload) => {
    state.watchNumber = payload
  },

  addUsersNumber: (state, payload) => {
    state.usersNumber.push(payload)
  },

  resetToDefault: (state, payload) => {
    state.usersNumber = payload
  }
}

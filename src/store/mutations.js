export default {
  addWatchNumbers: (state, payload) => {
    state.watchNumber = payload
  },

  addUsersNumber: (state, payload) => {
    state.usersNumber[payload.index] = payload.number
  },

  resetToDefault: (state, payload) => {
    state.usersNumber = payload
  }
}

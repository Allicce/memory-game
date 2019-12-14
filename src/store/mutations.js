export default {
  addWatchNumbers: (state, payload) => {
    state.watchNumber = payload
  },

  addUsersNumber: (state, payload) => {
    state.usersNumber[payload.index] = payload.number
  },

  resetToDefault: (state, payload) => {
    state.usersNumber = payload
    state.userResults = [
      /* [],
      [],
      [],
      [],
      [],
      [] */
    ]
  },

  incrementLevel: (state) => {
    state.actualLevel++
  },

  getFirstLevel: (state) => {
    state.actualLevel = 1
  },

  mutateCountItem: (state) => {
    if (state.actualLevel === 1) {
      state.countItems = 3
    }
  }
}

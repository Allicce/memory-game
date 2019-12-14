export default {
  addWatchNumbers: (state, payload) => {
    state.watchNumber = payload
  },

  addUsersNumber: (state, payload) => {
    state.usersNumber[payload.index] = payload.number
  },

  resetToDefault: (state, payload) => {
    state.usersNumber = payload
    state.userResults = []
  },

  incrementLevel: (state) => {
    state.actualLevel++
  },

  getFirstLevel: (state) => {
    state.actualLevel = 1
  },

  mutateCountItem: (state) => {
    if (state.actualLevel === 1 || state.actualLevel === 2 || state.actualLevel === 6) {
      state.countItems = 3
    } else if ((state.actualLevel >= 3 && state.actualLevel <= 5) || state.actual === 7 || state.actual === 8) {
      state.countItems = 6
    } else {
      state.countItems = 9
    }
    for (let i = 0; i < state.countItems; i++) {
      console.log('create users array')
      state.userResults.push([])
    }
  },

  mutationMonsterArray: (state) => {
    if (state.actualLevel === 2 || state.actualLevel === 3) {
      state.monsterArray = state.greenMonsterPicture.concat(state.blackMonsterPicture)
    }
  }

}

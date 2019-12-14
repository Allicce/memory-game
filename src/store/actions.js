export default {
  addArray: ({ commit }, array) => {
    commit('addWatchNumbers', array)
  },

  addUserArray: ({ commit }, object) => {
    commit('addUsersNumber', object)
  },

  getDefaultState: ({ commit }) => {
    commit('resetToDefault', [])
  },

  incrementActualLevel: ({ commit }) => {
    commit('incrementLevel')
  },

  resetLevels: ({ commit }) => {
    commit('getFirstLevel')
  },

  addCountItem: ({ commit }) => {
    commit('mutateCountItem')
  }
}

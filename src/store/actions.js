export default {
  addArray: ({ commit }, array) => {
    commit('addWatchNumbers', array)
  },

  addUserArray: ({ commit }, object) => {
    commit('addUsersNumber', object)
  },

  getDefaultState: ({ commit }) => {
    commit('resetToDefault', [])
  }
}

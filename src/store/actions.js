export default {
  addArray: ({ commit }, array) => {
    commit('addWatchNumbers', array)
  },

  addUserArray: ({ commit }, number) => {
    commit('addUsersNumber', number)
  }

}

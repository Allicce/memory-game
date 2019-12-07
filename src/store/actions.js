export default {
  addArray: ({ commit }, array) => {
    commit('addWatchNumbers', array)
  },

  addUserArray: ({ commit }, number) => {
    console.log(number)
    commit('addUsersNumber', number)
  }

}

export default {
  addArray: ({ commit }, array) => {
    commit('addWatchNumbers', array)
  },

  addUserArray: ({ commit }, number) => {
    console.log(number)
    commit('addUsersNumber', number)
  },

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

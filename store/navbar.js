const state = () => {
  return {
    dataSource: {}
  }
}

const mutations = {
  add(state, text) {
    state.dataSource = text
  }
}

const actions = {
  setData: ({ commit }, text) => {
    commit('setData', text)
  }
}

export default {
  state,
  mutations,
  actions
}
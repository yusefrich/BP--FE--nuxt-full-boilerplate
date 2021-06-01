export const state = () => ({
    auth: {
        user: {},
        token: null
    }
})

export const mutations = {
    setuser(state, user) {
      state.auth.user = user;
    },
    setToken(state, token) {
      state.auth.token = token;
    },
  }
  

export const actions = {
    setLoggedInUser({commit}, user, token){
        commit('setuser', user)
        commit('setToken', token)
    },
    logout({commit}){
        commit('setuser', {})
        commit('setToken', null)
    }
}

export const getters = {
    isAuthenticated(state) {
        return (state.auth.token !== null);
    },

    currentToken(state) {
        return state.auth.token;
    },

    loggedInUser(state){
        return state.auth.user;
    }
}

const { v4 } = require("uuid");

export const state = () => ({
  sessionUser: '',

});


export const actions = {
  createUUID ({ commit }){
    const sessionUser = v4();
    commit('SESSION_USER', sessionUser);
  },

  useLocalStorage ({ state }){
    const sessionUser = localStorage.getItem('data');
    // if ( sessionUser.length < 1 ){
      localStorage.setItem('data', state.sessionUser);
    // }
  },

};

export const mutations = {
  SESSION_USER: (state, sessionUser) => state.sessionUser = sessionUser
};


export const getters = {
};


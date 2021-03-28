export const state = () => ({
  allHead: [],
  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {
  async fetch ({ commit, state}) {
    // const { data } = ['999'];
    const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    // console.log('123');
    commit('ALL_HEAD', data);
  },
};

export const mutations = {
  ALL_HEAD: (state, data) => state.allHead = data,
};

export const getters = {
  allHead: state => state.allHead,
};

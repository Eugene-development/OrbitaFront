export const state = () => ({
  allHead: [],
  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {
  async getCatalog ({ commit, state}) {

    const catalogID = 2;//TODO HardCore
    const { data } = await this.$axios.$get('get-menu/' + catalogID, state.apiCRUD);
    commit('ALL_HEAD', data[0]);
  },
};

export const mutations = {
  ALL_HEAD: (state, data) => state.allHead = data,
};

export const getters = {
  allHead: state => state.allHead,
};

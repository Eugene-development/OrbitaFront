import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  rubric: [],
  rubricId: null,

  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
});

export const actions = {

  async getRubric({commit, state}, payload) {

    //TODO токены

    // await this.$axios.setToken('1', 'Bearer')
    // this.$axios.setHeader('Authorization', '1');
    // this.$axios.setToken('1');

    // Получил Id категории по слагу в пейлоаде
    const rubrics = await this.$axios.$get('get-all-rubric', state.apiCRUD);

    forEach(rubrics, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('RUBRIC_ID', id);
    });

    const {data} = await this.$axios.$get('get-rubric/' + state.rubricID, state.apiCRUD);
    commit('RUBRIC', data[0]);
  },

};


export const mutations = {
  RUBRIC: (state, data) => state.rubric = data,
  RUBRIC_ID: (state, id) => state.rubricID = id,
};

export const getters = {
  rubric: state => state.rubric,
};

import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  allRubric: [],
  products: [],
  pathAWS: '',

  pathAWSBucket: {
    path: process.env.IMAGE
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
  // apiCRUD: { baseURL: 'http://localhost:7788/' }
});

export const actions = {
  async fetch({commit, state}, payload) {
    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + payload.id, state.apiCRUD);
    const rubricID = payload.id;

    commit('ALL_RUBRIC', data);
    commit('RUBRIC_ID', rubricID);
  },

  async getProducts({commit, state}, payload) {

    const { data } = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    // console.log(state.pathAWSBucket.path)

    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)
    //Слабое место. Баг при перезагрузке
    const slugCategory = payload.slug;

    forEach(data, function (value) {
      //здесь добавить булево значение к каждому товару???
      const products = find(value.category, {'slug': slugCategory});
      commit('PRODUCTS', products);
    });
  },
};


export const mutations = {
  ALL_RUBRIC: (state, data) => state.allRubric = data,
  PRODUCTS: (state, data) => state.products = data,
  RUBRIC_ID: (state, rubricID) => state.rubricID = rubricID,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS
};

export const getters = {
  allRubric: state => state.allRubric,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
};

import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  allRubric: [],
  products: [],
  pathAWS: '',
  seo: [],

  pathAWSBucket: {
    path: process.env.IMAGE
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
  // apiCRUD: { baseURL: 'http://localhost:7788/' }
});

export const actions = {
  async getSeo({commit, state}, payload) {
    console.log(payload);
    const {data} = await this.$axios.$get('get-category-seo/' + payload, state.apiCRUD);


    // console.log(data);

      commit('SEO', data);

  },

  async getRubric({commit, state}, payload) {
    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + payload.id, state.apiCRUD);
    const rubricID = payload.id;

    commit('ALL_RUBRIC', data);
    commit('RUBRIC_ID', rubricID);
  },

  async getProducts({commit, state}, payload) {
    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)
    //Слабое место. Баг при перезагрузке


    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    const slugCategory = payload.slug;
    forEach(data, function (value) {
      const products = find(value.category, {'slug': slugCategory});
      commit('PRODUCTS', products);
    });
  },
};


export const mutations = {
  ALL_RUBRIC: (state, data) => state.allRubric = data,
  PRODUCTS: (state, data) => state.products = data,
  RUBRIC_ID: (state, rubricID) => state.rubricID = rubricID,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  SEO: (state, seo) => state.seo = seo
};

export const getters = {
  allRubric: state => state.allRubric,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
  seo: state => state.seo,
};

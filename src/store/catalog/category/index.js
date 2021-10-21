import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  category: [],
  pathAWS: '',
  categoryId: null,


  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
  // apiCRUD: { baseURL: 'http://localhost:7788/' }
});

export const actions = {

  async getCategory({commit, state}, payload) {


    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)

    //TODO а как на счёт искать по слагу на бэке?
    //Получил Id категории по слагу в пейлоаде
    const categories = await this.$axios.$get('get-all-category', state.apiCRUD);

    forEach(categories, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('CATEGORY_ID', id);
    });

    const {data} = await this.$axios.$get('get-category/' + state.categoryId, state.apiCRUD);
    commit('CATEGORY', data[0]);


    // const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    // const slugCategory = payload.slug;
    // forEach(data, function (value) {
    //   const products = find(value.category, {'slug': slugCategory});
    //   commit('PRODUCTS', products);
    // });
  },
};


export const mutations = {
  CATEGORY: (state, data) => state.category = data,
  CATEGORY_ID: (state, id) => state.categoryId = id,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,

};

export const getters = {
  category: state => state.category,
  pathAWS: state => state.pathAWS,
};

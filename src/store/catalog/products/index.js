import { map } from 'lodash';

export const state = () => ({
  product: [],
  category: [],
  pathAWS: '',

  visibleDescription: true,
  visiblePayment: false,
  visibleDelivery: false,

  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },

  // apiCRUD: {baseURL: 'http://localhost:7788/'}
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
});

export const actions = {
  // async getProduct({commit, state}, payload) {
  //   const slugCategory = payload[0];
  //   const allRubric = payload[1];
  //   await forEach(allRubric, function (value) {
  //     const data = find(value.category, {'slug': slugCategory});
  //     commit('PRODUCTS', data);
  //   });
  // },


  async getProduct({commit, state}, payload) {

    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)

    const id = payload.id;



    // await this.$axios.setToken('1', 'Bearer')
    // this.$axios.setHeader('Authorization', '1');
    // this.$axios.setToken('1');

    const { data } = await this.$axios.$get('get-one-product/' + id, state.apiCRUD);
    commit('PRODUCT', data);


    const category = map(data, 'category');
    commit('CATEGORY', category);
  },

  changeVisibleDescription({ commit }) {
    const visibleDescription = true;
    const visiblePayment = false;
    const visibleDelivery = false;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },

  changeVisiblePayment({ commit }) {
    const visibleDescription = false;
    const visiblePayment = true;
    const visibleDelivery = false;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },

  changeVisibleDelivery({ commit }) {
    const visibleDescription = false;
    const visiblePayment = false;
    const visibleDelivery = true;
    commit('VISIBLE_DESCRIPTION', visibleDescription);
    commit('VISIBLE_PAYMENT', visiblePayment);
    commit('VISIBLE_DELiVERY', visibleDelivery);
  },
};

export const mutations = {
  PRODUCT: (state, data) => state.product = data,
  CATEGORY: (state, data) => state.category = data,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  VISIBLE_DESCRIPTION: (state, visibleDescription) => state.visibleDescription = visibleDescription,
  VISIBLE_PAYMENT: (state, visiblePayment) => state.visiblePayment = visiblePayment,
  VISIBLE_DELiVERY: (state, visibleDelivery) => state.visibleDelivery = visibleDelivery,
};

export const getters = {
  product: state => state.product,
  category: state => state.category,
  pathAWS: state => state.pathAWS,
  visibleDescription: state => state.visibleDescription,
  visiblePayment: state => state.visiblePayment,
  visibleDelivery: state => state.visibleDelivery,
};
